import { useAuthContext } from "./useAuthContext"
import { useAddEmpContext } from "./useAddEmpContext"

export const useAddEmp = ()=>{
    
    const user =JSON.parse(localStorage.getItem('user'))   
    const {dispatch} = useAddEmpContext()
    
    //post data hook
    const addEmp = async(infos,URL)=>{

        
        const res = await fetch(`/hr/${URL}`,{

            method: 'POST',
            headers: {'Authorization':`Bearer ${user.token}`,'Content-type': 'application/json'},
            body:JSON.stringify(infos)
    
        })
        const json = await res.json()
    
        if(res.ok){
               
            console.log("User added successfully")
            dispatch({type:'SIGNUP',payload:json})

        }
    
        if(!res.ok){
    
            console.log(json.error)
            
        }

    }

    return {addEmp}

}