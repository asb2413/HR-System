import { useState, useEffect } from "react";
import { useEmpLogin } from "../../hooks/useEmpLogin";
import LocalForm from "../../components/LocalForm";
import { useFormContext } from "../../hooks/useFormStatesContext";
import '../../style/Login/login.css'
function EmpLogin() {
  //jsonMsg
  const [jsonMsg, setjsonMsg] = useState(null)

  const { login } = useEmpLogin();

  //path for LocalForm
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  //form context
  const { Username, Password } = useFormContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const infos = {
      username: Username.username,
      password: Password.password,
    };

    //signup function accsept 3 parameters and post it to back-end for login
    await login(infos, "hr-system-asb2413s-projects.vercel.app/emp/login",setjsonMsg);
  };

  return (
    <div className="login">
      <LocalForm handleSubmit={handleSubmit} path={path} jsonMsg={jsonMsg}/>
    </div>
  );
}
export default EmpLogin;
