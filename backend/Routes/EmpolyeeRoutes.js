const express=require("express");
const Employee = require("../module/EmpolyModel");


const EmployeeRoutes=express.Router()
EmployeeRoutes.post("/AddEmployee",async(req,res)=>{
    try {
        const employee= new Employee(req.body)
        await employee.save()
        res.status(200).send({"mag":"new Employee is added"})  
    } catch (error) {
        res.send({"mag":error})
    }
})
EmployeeRoutes.get("/get",async(req,res)=>{
    try {
        const employee=  await Employee.find(req.query)
     
        res.status(200).send({"data":employee})  
    } catch (error) {
        res.send({"mag":error})
    }
})

EmployeeRoutes.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try {
          await Employee.findByIdAndDelete({_id:id})
        //await Book.findByIdAndDelete({_id:id})
        res.status(202).send("Book is Remove")
       
    } catch (error) {
        res.send({"mag":error})
    }
})
module.exports=EmployeeRoutes