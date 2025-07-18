import { xAck , xReadGroup } from "redisstreme/client"
import { prismaClient } from "store/client";
import axios from "axios";
const REGION_ID = process.env.REGION_ID!;
const WORKER_ID = process.env.WORKER_ID!

if (!REGION_ID || !WORKER_ID) {
  throw new Error("REGION_ID and WORKER_ID must be set");
};

async function main() {
  

    const response = await xReadGroup(REGION_ID, WORKER_ID);

   let promises = response.map(({id, message} ) => fetchWebsite( message.url, message.id));
    await Promise.all(promises);

    xAck(REGION_ID, "a")

  
}

async function fetchWebsite(url: string, websiteId: string) {
   return new Promise<void>((resolve, reject) => {
      const startTime = Date.now();
      axios.get(url)
        .then(async () => {
          const endTime = Date.now();
         await prismaClient.websiteTick.create({
            data:{
              response_time_ms: endTime - startTime,
              status: "Up",
              region_id: REGION_ID,
              website_id: websiteId,
            }
            
          })
          resolve();
        })
        .catch(async () => {
          const endTime = Date.now();
          prismaClient.websiteTick.create({
            data: {
              response_time_ms: endTime - startTime,
              status: "Down",
              region_id: REGION_ID,
              website_id: websiteId,
            }
          })
          resolve();
        })
      })
}
main();