import { Routes,Route } from "react-router-dom";
import { Login } from "./Login";
import { Dashbord } from "./Dashbord";
export const AllRoute=()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            
            <Route path="/Dashbord" element={<Dashbord/>}></Route>
        </Routes>
    )
}