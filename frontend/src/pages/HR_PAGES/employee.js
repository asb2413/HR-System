import {useQuery} from '@tanstack/react-query'
import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import {useGetInfo} from "../../hooks/useGetInfo"


function Employee (){
  /*getInfo function takes 4 parameaters url, state.current for check if user not null,the user obj and body content
   so its hook for when we need to get data from any api we create
  */
    const {getInfo} = useGetInfo()
    const {user}= useAuthContext()

    /*note: we use useRef for check if there is a user or not and to controll the render
     if no the useQuery will be not fecth any data
     if yes it make the useQuery enabled true so it will be fetch the data
    */
    const state = useRef(false)
    if(user){
        state.current = true
    }
    
      const id = {id:'64436fb6f3a5f62abc54fc13'}
      
      const {data,status} = useQuery(['emp','/employee',state.current,user,id],getInfo,{enabled:state.current})
      
    return ( 

       <div className="Employee">
            {data &&
            
            <div className="info">
            <h1>{data._id}</h1>
            <h1>{data.username}</h1>
            <h1>{data.email}</h1>
            <h1>{data.phone}</h1>
            <h1>{data.name}</h1>
            <h1>{data.salary}</h1>
            </div>
             
             }
       </div>

     );
}
 
export default Employee