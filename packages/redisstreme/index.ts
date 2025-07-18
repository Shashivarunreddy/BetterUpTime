
import { createClient} from "redis";


const client = await createClient()
        .on("error", (err) => console.error("Redis Client Error", err))
        .connect();

type WebsiteEvent = {url: string, id: string}; 

async function xAdd({url, id}: WebsiteEvent) {
  await client.xAdd(
    'betteruptime:website', '*', {
        url,
        id
    }
  );
}


export async function xAddBulk(websites: WebsiteEvent[]){
  if (!websites) return;
  for (let i = 0; i < websites.length; i++) {
    const site = websites[i];
    if (!site) continue;
    await xAdd({
      url: site.url,
      id: site.id
    });
  }
}