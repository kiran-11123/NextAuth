"use client"


import { useState } from "react";



export default function Signin(){

    const[username,Setusername] = useState('');
    const [password , SetPassword] = useState('');
    async function SendData(e:any) {
        e.preventDefault();

        try{

            const response:any = await axios.post(" http://localhost:3000/api/signin" ,{
                username,
                password
            })

            localStorage.setItem("token" , response.data.token)
            console.log(response.data.token)
        }
        catch(er){

        }
        
    }
    return(
             
       <div>
        Signin Page
           <input  title="username" onChange={(e)=>Setusername(e.target.value)}/>
           <input  title="password" onChange={(e)=>SetPassword(e.target.value)}/>
           <button onClick={SendData}>Sign in</button>
       </div>
    )
}