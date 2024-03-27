import { useEffect, useState } from "react";
import {  useDispatch, useSelector} from "react-redux";
import { styled } from "styled-components";
import { Loginuser, Signupuser } from "../redux/action";
import { useNavigate } from "react-router-dom";
export const Login=()=>{
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    const data=useSelector(store=>store.masgforLogin)
    const [Logins,setLogin]=useState(false)
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const [ConfirmPassword,setConfirmPassword]=useState("")
    const handle=(e)=>{
        setLogin(true)
    }
    const handle2=(e)=>{
        setLogin(false)
    }
    const handlesignup=(e)=>{
        e.preventDefault();
        let obj={
            Email,
            Password,
            ConfirmPassword
        }
        console.log(obj)
        dispatch(Signupuser(obj))
       
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    const handleLogin=(e)=>{
        e.preventDefault();
        let obj={
            Email,
            Password,
           
        }
        console.log(obj)
        dispatch(Loginuser(obj))
        
        setEmail("")
        setPassword("")
        
    }
    useEffect(()=>{
       if(data=="login successfully"){
        Navigate("/Dashbord")
       }
       if(data=="The new user has been registered"){
        setLogin(true)
       }
    },[data])
    
    return(
       <DIV>
        
        <LDIV>
          {Logins?<h1>Login from</h1>:<h1>Signup from</h1>}
            <But onClick={handle}>Login</But>
            <But  onClick={handle2}>Signup</But>
            {Logins?
            <LOGIN>
              <INPUT placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}></INPUT>
              <INPUT placeholder="Password"  value={Password} onChange={(e)=>setPassword(e.target.value)}></INPUT>
              <Button onClick={handleLogin}>LOGIN</Button>
            </LOGIN> :
            <SIGNUP>
              <INPUT placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)} ></INPUT>
              <INPUT placeholder="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}></INPUT>
              <INPUT placeholder="confirm Password" value={ConfirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></INPUT>
              <Button onClick={handlesignup}>Signup</Button>
            </SIGNUP> 
           }
        </LDIV>
       
       </DIV> 
    )
}
const DIV=styled.div`
width:100%;
height:700px;
padding:30px;
background-color:blueviolet;

`
const LDIV=styled.div`
width:30%;
background-color:white;
padding:10px;

margin:auto;
border-radius:30px;


`
const LOGIN=styled.div`
margin-top:20px;

`

const SIGNUP=styled.div`
margin-top:20px;

`
const INPUT=styled.input`
 width:80%;
 margin:auto;
 align-items:center;
 padding:7px;
 margin-top:20px;
margin-bottom:20px;
border-radius:20px

`
const Button=styled.button`
width:80%;
 margin:auto;
 align-items:center;
 padding:7px;
 margin-top:20px;
margin-bottom:20px;
border-radius:20px
`
const But=styled.button`

width:40%;
 
 align-items:center;
 padding:7px;
border:none;
`