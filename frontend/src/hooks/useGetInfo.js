export const useGetInfo = ()=>{

    const getInfo = async (key)=>{
      
      if(key.queryKey[2] === true){
        
          const postsData = await (await fetch(`/hr/${key.queryKey[1]}`,{
              method:"POST",
              headers:{'Authorization':`Bearer ${key.queryKey[3].token}`,'Content-type': 'application/json'},
              body:JSON.stringify(key.queryKey[4])
            })).json()
            
            return postsData
  
        }
      }
      
      return {getInfo} 
  
  }
   
      
      

