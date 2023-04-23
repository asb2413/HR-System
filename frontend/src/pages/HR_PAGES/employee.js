import {useQuery} from '@tanstack/react-query'
import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import {useGetInfo} from "../../hooks/useGetInfo"
import SerchBar from '../../components/SerchBar';
import EmpCard from '../../components/empCard';


function Employee (){
  /*getInfo function takes 4 parameaters url, state.current for check if user not null,the user obj and body content
   so its hook for when we need to get data from any api we create
  */
    const {getInfo} = useGetInfo()
    const {user}= useAuthContext()
    const key = useRef({key:null})
    const type = useRef({type:'id'})
    const url = useRef('/employee')
    
    //console.log(key.current)
    /*note: we use useRef for check if there is a user or not and to controll the render
     if no the useQuery will be not fecth any data
     if yes it make the useQuery enabled true so it will be fetch the data
    */
    const state = useRef(false)
    if(user){
        state.current = true
    }
    
      
      
      const {data,status} = useQuery(['emp',url.current,state.current,user,key],getInfo,{enabled:state.current,refetchOnWindowFocus: false})
      console.log(data)
      
    return ( 

       <div className="Employee">

        <SerchBar setKey={key.current} setType={type.current} setUrl={url}/>
        <EmpCard data={data} url={url.current} />
             
       </div>

     );
}
 
export default Employee