import { Login, Signup, getData } from "./actionType";

const inti={
    masgforLogin:"",
    token:"",
    data:[]
}

export const reducer=(state=inti,{type,palyload})=>{
    switch (type) {
        case Login:
             return {...state,masgforLogin:palyload.mag,token:palyload.token}
           
        case Signup:
            return {...state,masgforLogin:palyload}
        case getData:
                return {...state,data:palyload.data}
        default:
             return state
    }
}