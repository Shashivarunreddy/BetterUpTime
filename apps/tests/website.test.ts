import { beforeAll, describe, expect, it } from 'bun:test';

import axios from 'axios';
import { createUser } from './testUtils';
import { BACKEND_URL } from './config';

describe("Website gets created", () => {

  let  token: String;

  beforeAll(async () => {
    const data = await createUser();
    token = data.jwt;
  })

  it("website not created if url is not present", async()=>{
    try{
      await axios.post(`${BACKEND_URL}/website`, {

      },{
        headers: {
          Authorization: token as string
        }
      });
      expect(false, "Website created when it should not have");
    } catch(e){

    }
  })
 
  it("website created if url is present", async()=> {
    const response = await axios.post(`${BACKEND_URL}/website`, {
      url: "https://google.com"
    },{
        headers:{
          Authorization: token as string
        }
      });
    expect(response.data.id).not.toBeNull();
  });

  it("website is not created if the header is not present", async()=> {
    try{
    const response = await axios.post(`${BACKEND_URL}/website`, {
      url: "https://googel.com"
    });
    expect(false, "Website shouldt be created without auth header");
  } catch(e){

  }
    
  });

})


describe("Can fetch website", () => {
  let  token1: String , userId1: string;
  let  token2: String , userId2: string;
  beforeAll(async () => {
    const user1 = await createUser();
    const user2 = await createUser();
    userId1 = user1.id;
    token1 = user1.jwt;
    userId2 = user2.id;
    token2 = user2.jwt;
  })

  it("Is able to fetch a website that the user created",async ()=>{
        const websiteResponse = await axios.post(`${BACKEND_URL}/website`, {
      url: "https://google.com"
    },{
        headers:{
          Authorization: token1 as string
        }
      });

    const getWebsiteResponse = await axios.get(`${BACKEND_URL}/status/${websiteResponse.data.id}`, {
      headers: {
        Authorization: token1 as string
      }
    })
    // console.log(getWebsiteResponse.data);
    // console.log(websiteResponse.data);
    expect(getWebsiteResponse.data.website.id).toBe(websiteResponse.data.id);
    expect(getWebsiteResponse.data.website.user_id).toBe(userId1);
  })


  it("Cant access website created by other user",async ()=>{
        const websiteResponse = await axios.post(`${BACKEND_URL}/website`, {
      url: "https://google.com"
    },{
        headers:{
          Authorization: token1 as string
        }
      });
      try{
    await axios.get(`${BACKEND_URL}/status/${websiteResponse.data.id}`, {
      headers: {
        Authorization: token1 as string
      }
    })
      expect(false, "Control should not reach here");
  } catch(e) {

  }
  })


})