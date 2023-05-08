//css
import '../../style/signup/signup.css'

import { useState, useEffect } from "react";
import { useSignup } from "../../hooks/useSignup";
import { useFormContext } from "../../hooks/useFormStatesContext";
import LocalForm from "../../components/LocalForm";

function Signup() {

  //json msg state
  const [jsonMsg, setjsonMsg] = useState(null)
  if(jsonMsg === "Thanks For Signup"){

    setTimeout(() => {setjsonMsg(null)}, 4000)

  }
  
  //path for LocalForm
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  const { signup } = useSignup();

  //context states
  const {
    Username,
    Password,
    Phone,
    Email,
    Name,
    Identity,
    Job,
    Age,
    Nationality,
    Gender,
  } = useFormContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const infos = {
      username: Username.username,
      password: Password.password,
      email: Email.email,
      phone: Phone.phone,
      identity: Identity.identity,
      age: Age.age,
      gender: Gender.gender,
      nationality: Nationality.nationality,
      job: Job.job,
      name: Name.name,
    };

    //url begin with /hr/
    //signup function accsept 4 parameters and post it to back-end for signup
    await signup(infos, "signup",setjsonMsg);
  };

  return (
    <div className="signup">
      <LocalForm path={path} handleSubmit={handleSubmit} jsonMsg={jsonMsg}/>
    </div>
  );
}
export default Signup;
