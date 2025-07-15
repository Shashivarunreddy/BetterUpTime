import jwt from 'jsonwebtoken';
import express from 'express';
import { prismaClient } from "store/client";
import { AuthInput } from './types';
import { authMiddleware } from './middleware';

const app = express();

app.use(express.json());

app.post("/website" , authMiddleware ,async (req,res) => {

    if(!req.body.url){
      res.status(411).json({
        error: "URL is required"
      });
      return;
    }
 const website = await prismaClient.website.create({
    data: {
      url: req.body.url,
      timeAdded: new Date(),
      user_id: req.userId!
      
    }
  })

  res.json({
    id: website.id
  })

});

app.get("/status/:websiteId" , authMiddleware ,async (req, res) =>{
    const website = await prismaClient.website.findFirst({
      where:{
        user_id: req.userId,
        id: req.params.websiteId,
      },
      include:{
        ticks:{
          orderBy: {
            createdAt: 'desc'
          },
          take: 1
        }
      }
    })

    if (!website) {
      res.status(409).json({
        message:"Website not found"
      })
      return;
    }

    res.json({
      website
    })


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
  } catch (e: any) {
    if (e.code === 'P2002') {
      return res.status(409).send("Username already exists");
    }
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