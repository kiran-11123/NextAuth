import { loadComponents } from "next/dist/server/load-components"
import { useCallback, useEffect, useState } from "react"
"use client"
export default async function Profile(){

     const [profile,setProfile] = useState('');
    useEffect(()=>{
        
        async function GetProfile(){

        
       const response:any =  await axios.get("http://localhost:3000/api/profile",{
            headers:{
                authorization : localStorage.getItem("token")
            }
        })
        setProfile(response.data.avatarUrl)
    }

    GetProfile();


    },[])
    return(
        <div>
            Welcome to profile page
        </div>
    )
}