import { useState,createContext} from "react";

// we need a lot of states so its better to make local state context so the components can use the states AND update it

export const FormContext = createContext(null)



export const FormContextProvider = ({children})=>{

    const [username,setUsername] = useState('hi') 
    const [password,setPassword] = useState('') 
    const [phone,setPhone] = useState('') 
    const [email,setEmail] = useState('') 
    const [name,setName] = useState('') 
    const [identity,setIdentity] = useState('') 
    const [job,setJob] = useState('') 
    const [age,setAge] = useState('') 
    const [nationality,setNationality] = useState('') 
    const [gender,setGender] = useState('')
    const [birthDate,setBirthDate] = useState('')
    const [address,setAddress] = useState('') 
    const [degree,setDegree] = useState('') 
    const [department,setDepartment] = useState('') 
    const [supervisor,setSupervisor] = useState('') 
    const [workLocation,setWorkLocation] = useState('')  
    const [salary,setSalary] = useState('') 
    const [emergencyPhone,setEmergencyPhone] = useState('') 
    const [photo,setPhoto] = useState('')
    const [contract,setContract] = useState('')  

    const States = {

        Username:{username,setUsername},
        Password:{password,setPassword},
        Phone:{phone,setPhone},
        Email:{email,setEmail},
        Name:{name,setName},
        Identity:{identity,setIdentity},
        Job:{job,setJob},
        Age:{age,setAge},
        Nationality:{nationality,setNationality},
        Gender:{gender,setGender},
        BirthDate:{birthDate,setBirthDate},
        Address:{address,setAddress},
        Degree:{degree,setDegree},
        Department:{department,setDepartment},
        Supervisor:{supervisor,setSupervisor},
        WorkLocation:{workLocation,setWorkLocation},
        Salary:{salary,setSalary},
        EmergencyPhone:{emergencyPhone,setEmergencyPhone},
        Photo:{photo,setPhoto},
        Contract:{contract,setContract}

    }

    return(
    
    <FormContext.Provider value={{...States}}>

        {children}

    </FormContext.Provider>
)
    
}