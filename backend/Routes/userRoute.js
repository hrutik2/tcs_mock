const express=require("express");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const User = require("../module/userModules");

require('dotenv').config()
const UserRoutes=express.Router()

UserRoutes.post("/register",async(req,res)=>{
    const {Email,Password,ConfirmPassword}=req.body
    try {
        const user=await User.findOne({Email})
        if(user){
            res.status(400).send("user already exist")
        }
        else{
            const hash =  await bcrypt.hash(Password, 3)
            console.log(hash)
            const  newUSer=new User({Email,ConfirmPassword,Password:hash})
            if(Password===ConfirmPassword){
            await newUSer.save()
            res.status(201).send({"mag":"The new user has been registered", "registeredUser":newUSer})
         }else{
            res.status(201).send({"mag":"password does not match"})
         }
        }
        
    } catch (error) {
        res.send(error)
    }
})
UserRoutes.post("/login",async(req,res)=>{
    const {Email,Password,}=req.body
    try {
        const user=await User.findOne({Email})
        if(user){
            bcrypt.compare(Password,user.Password, (err, result)=> {
                
                if(!result){
                    res.status(400).send("wrong credential")  
                }
                else{
                    const token = jwt.sign({userID:user._id },process.env.SECRET_KEY);
                    res.status(201).send({"mag":"login successfully","token":token})
                }
            })
        }
        else{
            
            res.status(400).send("user need to register first")
        }
        
    } catch (error) {
        res.send(error)
    }
})

module.exports=UserRoutes