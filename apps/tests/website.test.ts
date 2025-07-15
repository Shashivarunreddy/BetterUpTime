import { beforeAll, describe, expect, it } from 'bun:test';

import axios from 'axios';
import { createUser } from './testUtils';

let BASE_URL = 'http://localhost:3000';

describe("Website gets created", () => {

  let jwt: String, token: String;

  beforeAll(async () => {
    const data = await createUser();
    jwt = data.jwt;
    token = data.jwt;
  })

  it("website not created if url is not present", async()=>{
    try{
      await axios.post(`${BASE_URL}/website`, {

      },{
        headers:{
          Authorization: token as string
        }
      });
      expect(false, "Website created when it should not have");
    } catch(e){

    }
  })
 
  it.todo("website created if url is present", async()=> {
    const response = await axios.post(`${BASE_URL}/website`, {
      url: "https://example.com"
    });
    
    expect(response.data.id).not.toBeNull();
  });



})