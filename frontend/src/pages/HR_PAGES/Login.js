import { useState, useEffect } from 'react'
import { useLogin } from '../../hooks/useLogin'
import LocalForm from '../../components/LocalForm'
import { useFormContext } from '../../hooks/useFormStatesContext'



function Login() {

  
  const {login} = useLogin()
  
  //path for LocalForm
  const [path, setPath] = useState('')
  useEffect(()=>{

    setPath(window.location.pathname)

  },[])

  //form context
  const {

    Username,
    Password,

  } = useFormContext()

  const handelSubmit = async (e)=>{
    e.preventDefault()

      console.log(Username,Password)    
      const infos = {

        username:Username.username,
        password:Password.password

      }

      console.log(infos)
      //signup function accsept 2 parameters and post it to back-end for login
      await login(infos,'login')
      


  }

  return (

    <div className="login">


    <LocalForm

    handelSubmit={handelSubmit}
    path={path}

    />

     </div>
  )
}
export default Login