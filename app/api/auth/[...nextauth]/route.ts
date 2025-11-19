import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import  CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    providers:[
        CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Email",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "kiran@gmail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
        const username = credentials?.username;
        const password = credentials?.password;

        //adding the logic of the database
       console.log(username )
       console.log(password) 
        const user = {
            name:"kiran",
            id:"1",
            username :"kiran@gmail.com"
        }

        if(user){
            return user;
        }
        else{
            return null;
        }
        

   


       
    }
  }),

  GoogleProvider({
    clientId: "abc",
    clientSecret: "abc"
  }),

   GitHubProvider({
    clientId: "abc",
    clientSecret: "abc"
  })


]



    
})

export { handler as GET, handler as POST };