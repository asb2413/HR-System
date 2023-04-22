import {useQuery} from '@tanstack/react-query'
import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import {useGetInfo} from "../../hooks/useGetInfo"


function MyProfile (){
  /*getInfo function takes 3 parameaters url, state.current for check if user not null, and the user obj
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
      
        const {data,status} = useQuery(['user','/myProfile',state.current,user,user],getInfo,{enabled:state.current})
 
    return ( 

       <div className="myProfule">
            {data &&
            
            <div className="info">
            <h1>{data._id}</h1>
            <h1>{data.username}</h1>
            <h1>{data.email}</h1>
            <h1>{data.phone}</h1>
            </div>
             
             }
       </div>

     );
}
 
export default MyProfile