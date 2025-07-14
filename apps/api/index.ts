import jwt from 'jsonwebtoken';
import express from 'express';
const app = express();
import { prismaClient } from "store/client";
import { AuthInput } from './types';
import { authMiddleware } from './middleware';


app.use(express.json());

app.post("/website" , authMiddleware ,async (req,res) => {

    if(!req.body.url){
      res.status(411).json({
        error: "URL is required"
      });
      return;
    }
 const website = await prismaClient.website.create({
    data:{
      url: req.body.url,
      user_id: req.body.userId,
      timeAdded: new Date()
    }
  })

  res.json({
    id: website.id
  })

});

app.get("/status/:websiteId" , authMiddleware , (req, res) =>{
    
});


app.post("/user/signup", async (req, res) => {
  const data = AuthInput.safeParse(req.body);

  if (!data.success) {
    res.status(403).send("Invalid input");
    return;
  }

  try {
   let user =  await prismaClient.user.create({
      data: {
        username: data.data.username,
        password: data.data.password
      }
    });

    res.json({
      id: user.id
    });
  } catch (e) {
    console.error(e);
    res.status(403).send("User creation failed");
  }
});


app.post("/user/signin",async (req,res) =>{
   const data = AuthInput.safeParse(req.body);
    if(!data.success){
      res.status(403).send("");
      return;
    }

    let user = await prismaClient.user.findFirst({
      where:{
        username: data.data.username,
      }
    })

    if(user?.password !== data.data.password){
      res.status(403).send("Invalid credentials");
      return;
    }

    let token = jwt.sign({
      sub: user.id
    }, process.env.JWT_TOKEN!)

    res.json({
      jwt: token
    });
})

app.listen(process.env.PORT || 3000)