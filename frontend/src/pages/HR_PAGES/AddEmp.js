import { useEffect, useState } from 'react'
import { useAddEmp } from '../../hooks/useAddEmp'
import LocalForm from '../../components/LocalForm'
import { useFormContext } from '../../hooks/useFormStatesContext'
import {useEmpUploads} from '../../hooks/useEmpUploads'






function AddEmp() {

  


  //path for LocalForm
  const [path, setPath] = useState('')
  useEffect(()=>{

    setPath(window.location.pathname)

  },[])

  const {addEmp}=useAddEmp()
  const {empUpload}=useEmpUploads()
  
  const {
    Username,
    Password,
    Email,
    Phone,
    Identity,
    Age,
    Gender,
    Nationality,
    Job,
    Name,
    BirthDate,
    Address,
    Degree,
    Department,
    Supervisor,
    WorkLocation,
    Salary,
    EmergencyPhone,
    Photo,
    Contract
  } = useFormContext()
  
  const handelImg=(e)=>{

    Photo.setPhoto(e.target.files[0])
    
  }
  
  const handelContract=(e)=>{

    Contract.setContract(e.target.files[0])
    
  }
  
    

  const handelSubmit = async (e)=>{
    e.preventDefault()
      
      const infos = {
        username:Username.username,
        password:Password.password,
        email:Email.email,
        phone:Phone.phone,
        identity:Identity.identity,
        age:Age.age,
        gender:Gender.gender,
        nationality:Nationality.nationality,
        job:Job.job,
        name:Name.name,
        birthDate:BirthDate.birthDate,
        address:Address.address,
        degree:Degree.degree,
        department:Department.department,
        supervisor:Supervisor.supervisor,
        workLocation:WorkLocation.workLocation,
        salary:Salary.salary,
        emergencyPhone:EmergencyPhone.emergencyPhone
      }
      
      
    
      
      
      //url begin with /hr/
      await addEmp(infos,'addEmp')
      
      
  }

   const handelUpload = async(e)=>{

    e.preventDefault()
    await empUpload(Photo.photo,Contract.contract,'addEmpUploads')


  }


  

  return (

    //a lot of props data :

    <div className="signup">

        
        <LocalForm

        handelSubmit={handelSubmit}
        handelImg={handelImg}
        handelContract={handelContract}
        handelUpload ={handelUpload }
        path={path}
        
         />

    </div>
  )
}
export default AddEmp