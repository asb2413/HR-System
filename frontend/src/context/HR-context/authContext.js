import {  createContext,useEffect,useReducer } from "react";

//create new context for user auth
export const AuthContext = createContext()

//reducer for state of user 
export const authReducer = (state,action)=>{

        switch(action.type){

            case 'LOGIN': 
                return {user: action.payload}

            case 'LOGOUT':
                return {user:null}
            default: 
                return state

        }

}

export const AuthContextProvider = ({children})=>{

        const [state,dispatch] = useReducer(authReducer,{user:null})

        useEffect(()=>{

            const user = JSON.parse(localStorage.getItem('user'))
            dispatch({type:'LOGIN',payload:user})

        },[])
        
return(

<AuthContext.Provider value={{...state,dispatch}}>

    {children}

</AuthContext.Provider>)
    
}