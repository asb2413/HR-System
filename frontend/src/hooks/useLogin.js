import { useAuthContext } from "./useAuthContext"
export const useLogin = ()=>{

    //post the data and get the token 
    const {dispatch} = useAuthContext()
    const login = async(infos,URL)=>{

        const res = await fetch(`/hr/${URL}`,{

            method: 'POST',
            headers: {'Content-type': 'application/json' },
            body:JSON.stringify(infos)
    
        })
        
        const json = await res.json()
    
        if(res.ok){

            console.log("User logedin successfully")
            localStorage.setItem("user",JSON.stringify(json))
            dispatch({type:'LOGIN',payload:json})
            
    
        }
    
    
        if(!res.ok){
    
            console.log(json)
    
        }

    }

    return {login}


}