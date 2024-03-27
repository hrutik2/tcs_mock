const mongoose=require("mongoose")

const EmployeeSchema=mongoose.Schema({
    FirstName:String,
    LastName:String,
    Email: String,
    salary:Number,
    job:String,
       
      
})

const Employee=mongoose.model("Employee",EmployeeSchema)
module.exports=Employee