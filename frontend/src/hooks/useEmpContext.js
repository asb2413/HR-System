import {empContext} from '../context/HR-context/empContext'
import { useContext } from 'react'

export const useEmpContext = ()=>{
//consoming context hook
    const context = useContext(empContext)

    if(!context){

        throw Error('useAuthContext must be use inside  AuthContextProvider')

    }

    return context

}
