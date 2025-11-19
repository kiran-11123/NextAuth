import { loadComponents } from "next/dist/server/load-components"
import axios from 'axios'
export default async function Profile(){

   
   
        
       const response:any =  await axios.get("http://localhost:3000/api/profile",{
            headers:{
                authorization : localStorage.getItem("token")
            }
        })
    const profile = response.data.avatarUrl





    return(
        <div>
            Welcome to profile page {profile}
        </div>
    )
}