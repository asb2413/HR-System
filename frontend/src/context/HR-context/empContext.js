import { useState , createContext } from "react";
import EmpCard from "../../components/EmpCards";
import SearchBar from "../../components/SerchBar";


export const empContext = createContext()

export const EmpContextProvider = ({children})=>{
    const [empData, setEmpData] = useState(null)
return(


    <empContext.Provider value={{empData,setEmpData}}>
        {children}
    </empContext.Provider>

)
    

}