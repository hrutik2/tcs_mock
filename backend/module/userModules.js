const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
       
        Email: String,
        Password: String,
        ConfirmPassword:String,
      
})

const User=mongoose.model("user",userSchema)
module.exports=User