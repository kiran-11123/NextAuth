"use client"


import { useState } from "react";
import axios from "axios";



export default function Signin(){

    const[username,Setusername] = useState('');
    const [password , SetPassword] = useState('');
    async function SendData() {

        try{

            const response:any = await axios.post(" http://localhost:3000/api/signin" ,{
                username,
                password
            })

            localStorage.setItem("token" , response.data.token)
            console.log(response.data.token)
        }
        catch(er){
            console.log("Error occured" , er)
        }
        
    }
    return(
             
       <div>
           <input  title="username" onChange={(e)=>Setusername(e.target.value)} placeholder="enter username"/>
           <input  title="password" onChange={(e)=>SetPassword(e.target.value)} placeholder="Enter password"/>
           <button onClick={SendData}>Sign in</button>
       </div>
    )
}