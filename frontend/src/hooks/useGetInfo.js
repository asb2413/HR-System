import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useGetInfo = ()=>{


    const {user} = useAuthContext()
    const getInfo = async()=>{
  
      if(user){
    
           const res = await fetch('/hr/myProfile',{
    
           method:"POST",
           headers:{'Authorization':`Bearer ${user.token}`,'Content-type': 'application/json'},
           body:JSON.stringify(user)
        
      })
    
      return res.json()
           
      }
    }

     return {getInfo}     
  }
   
      
      

