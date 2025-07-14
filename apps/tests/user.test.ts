import { describe, it, expect } from "bun:test";
import axios from "axios";

import { BACKEND_URL } from "./config";
const USER_NAME = Math.random().toString();


describe("Signup endpoints", () => {
  it("Should't able to signup if body is incorrect", async ()=> {
    try {
     await  axios.post(`${BACKEND_URL}/user/signup`, {
      username: USER_NAME,
      password: "password"
    })
      expect(false, "Control should not reach here");
    } catch (e) {
        
    }
  })

  it("Is able to signup if body is correct", async ()=> {
    try{
    const res = await axios.post(`${BACKEND_URL}/user/signup`, {
      username: USER_NAME,
      password: "password"
    })
      expect(res.status).toBe(200);
      expect(res.data.id).toBeDefined();
  } catch (e) {

  }
  })

})



describe("Signin endpoints", () => {
  it("Should't able to signin if body is incorrect", async ()=> {
    try {
     await axios.post(`${BACKEND_URL}/user/signin`, {
      username : USER_NAME,
      password: "password"
    })
      expect(false, "Control should not reach here");
    } catch (e) {
        
    }
  })

  it("Should  able to signin if body is correct", async ()=> {
    try{
    const res = await axios.post(`${BACKEND_URL}/user/signin`, {
      username: USER_NAME,
      password: "password"
    })
      expect(res.status).toBe(200);
      expect(res.data.jwt).toBeDefined();
  } catch (e) {
    
  }
  })

})