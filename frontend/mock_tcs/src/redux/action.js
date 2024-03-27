import axios from "axios"
import { Login, Signup, getData, } from "./actionType"


export const Loginuser=(obj)=>(dispatch)=>{
    axios.post("http://localhost:7009/mock/login",obj)
    .then(res=>{
        console.log(res)
        dispatch({type:Login,palyload:res.data})
    })
    .catch(error=>console.error(error))
}
export const Signupuser=(obj)=>(dispatch)=>{
    axios.post("http://localhost:7009/mock/register",obj)
    .then(res=>{
        console.log(res)
        dispatch({type:Signup,palyload:res.data.mag})
    })
    .catch(error=>console.error(error))
}

export const GetData=()=>(dispatch)=>{
    axios.get("http://localhost:7009/mock/get")
    .then(res=>{
        console.log(res.data)
        dispatch({type:getData,palyload:res.data})
    })
    .catch(error=>console.error(error))
}

export const postData=(obj)=>(dispatch)=>{
    axios.post("http://localhost:7009/mock/AddEmployee",obj)
    .then(res=>{
        console.log(res.data)
        
    })
    .catch(error=>console.error(error))
}

export const DeleteData=(id)=>(dispatch)=>{
    axios.delete(`http://localhost:7009/mock//delete/${id}`,)
    .then(res=>{
        console.log(res.data)
        
    })
    .catch(error=>console.error(error))
}