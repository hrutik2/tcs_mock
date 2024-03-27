const express=require("express")
require('dotenv').config();
const cors=require("cors");
const Connect = require("./db");
const UserRoutes = require("./Routes/userRoute");

const EmployeeRoutes = require("./Routes/EmpolyeeRoutes");
const app=express()

app.use(express.json())
app.use(cors())
app.use("/mock",UserRoutes)
app.use("/mock",EmployeeRoutes)
app.listen(process.env.port,async()=>{
    try {
      await  Connect
      console.log("run") 
    } catch (error) {
        console.log(error)
    }
})