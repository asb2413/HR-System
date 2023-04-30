import { useAuthContext } from "./useAuthContext"
import { useAddEmpContext } from "./useAddEmpContext"

export const useEmpUploads = ()=>{
    
    const user =JSON.parse(localStorage.getItem('user'))   
    const {dispatch,emp_user} = useAddEmpContext()

    //post data hook
    const empUpload = async (photo,contract,URL)=>{
        
        //form-data for posting upload files with json files
        const formData = new FormData()
        formData.append('photo',photo)
        formData.append('contract',contract)
        formData.append('id',JSON.stringify(emp_user))
        
        const res = await fetch(`/hr/${URL}`,{

            method: 'POST',
            headers:{'Authorization':`Bearer ${user.token}`},
            body:formData
    
        })
        const json = await res.json()
    
        if(res.ok){
               
            dispatch('UPLOADED')
            
        }
    
    
        if(!res.ok){
    
            console.log(json.error)
            
        }

    }

    
    return {empUpload}

}