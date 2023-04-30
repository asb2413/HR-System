import {useQuery} from '@tanstack/react-query'
import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import {useGetInfo} from "../../hooks/useGetInfo"


function MyProfile (){
  /*getInfo function takes 3 parameaters url, the user token,and if you need to set in body
    the hook for get the data from api 
  */
    const {getInfo} = useGetInfo()
    const user =JSON.parse(localStorage.getItem('user'))

    /*note: we use useRef for check if there is a user or not and to controll the render
     if no the useQuery will be not fecth any data
     if yes it make the useQuery enabled true so it will be fetch the data
    */
    
      
        const {data,status} = useQuery(['user','/myProfile',user,user],getInfo)
 
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