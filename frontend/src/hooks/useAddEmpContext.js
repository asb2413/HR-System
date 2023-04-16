import { addContext } from '../context/HR-context/addEmpContext'
import { useContext } from 'react'

export const useAddEmpContext = ()=>{

    //consoming context hook
    const context = useContext(addContext)

    if(!context){

        throw Error('useAuthContext must be use inside  AuthContextProvider')

    }

    return context

}