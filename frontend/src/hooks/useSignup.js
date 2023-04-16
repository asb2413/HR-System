
export const useSignup = ()=>{
    
    //post the data hook
    const signup = async (infos,URL)=>{
        
        
        const res = await fetch(`/hr/${URL}`,{
            method:'POST',
            headers: {'Content-type': 'application/json' },
            body:JSON.stringify(infos)
    
        })
        const json = await res.json()
    
        if(res.ok){
    
            console.log("User added successfully")
            
    
        }
    
    
        if(!res.ok){
    
            console.log(json.error)
            
        }

    }
    return {signup}

}
