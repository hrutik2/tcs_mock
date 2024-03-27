const mongoose=require("mongoose")
require('dotenv').config();
const Connect=mongoose.connect(process.env.mongoDb)

module.exports=Connect