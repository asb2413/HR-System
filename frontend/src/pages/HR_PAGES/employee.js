import {useQuery} from '@tanstack/react-query'
import { createContext, useRef ,useReducer, useEffect } from 'react'
import {useGetInfo} from "../../hooks/useGetInfo"
import SearchBar from '../../components/SerchBar'
import EmpCards from '../../components/EmpCards'

export const EmpContext = createContext()

const ampReducer = (state,action)=>{

  switch(action.type){

      case 'ALL': 
          return {empData: action.payload}

      case 'ONE':
          return {empData:action.payload}
      default: 
          return state

  }

}

function Employee (){

  const [state,dispatch] = useReducer(ampReducer,{empData:null})

  const {getInfo} = useGetInfo()
  
  
  const user =JSON.parse(localStorage.getItem('user'))
  const {data,status} = useQuery(['user','/employee',user,{user:null}],getInfo)
  
  
    useEffect(()=>{

      if(data){dispatch({type:'ALL',payload:data})}
      
    },[data])
    
    

  
  
  
  return ( 

       <div className="Employee">
        <EmpContext.Provider value={{...state,dispatch,data}}>
        <SearchBar/>
        <EmpCards/>
        </EmpContext.Provider>
       </div>

     );
}
 
export default Employee