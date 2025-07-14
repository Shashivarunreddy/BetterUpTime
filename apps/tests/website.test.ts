import { describe, expect, it } from 'bun:test';

import axios from 'axios';

let BASE_URL = 'http://localhost:3000';

describe("Website gets created", () => {
  it("website not created if url is not present", async()=>{
    try{
      await axios.post(`${BASE_URL}/website`, {
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