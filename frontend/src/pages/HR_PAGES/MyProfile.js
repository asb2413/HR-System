import { useEffect ,useState } from "react";
import { useQuery } from "@tanstack/react-query"; 
import { useAuthContext } from "../../hooks/useAuthContext"
import { useGetInfo } from "../../hooks/useGetInfo";


function MyProfile (){


  const {user} = useAuthContext()
  const [state, setState] = useState(false)

    
    const getInfo =async ()=>{

       if(user){

        
        const postsData = await (await fetch(`/hr/myProfile`,{
          method:"POST",
          headers:{'Authorization':`Bearer ${user.token}`,'Content-type': 'application/json'},
          body:JSON.stringify(user)
        })).json()
        
        return postsData
        
       }

       

      }
      
      



  



  const {data,status, isLoading} = useQuery(['user'],getInfo,{enabled:state})
 
 
  
  


    return ( 

        <div className="MyProfile">

        {
        <>
        {data?<h1>{data.username}</h1>:<h1>...Loading</h1>}
        <p></p>
        <p></p>
        <p></p>
        </>
        }
            
        </div>

     );
}
 
export default MyProfile