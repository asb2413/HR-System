import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../imgs/logo-nodejs-2.svg";
import logout from "../imgs/box-arrow-right.svg";
import { useEmpAuthContext } from "../hooks/useEmpAuthContext";
import '../style/navbar/navbar.css'

function EmpNavebar() {
  const { empUser, empDispatch } = useEmpAuthContext();

  const handelClick = () => {
    if(empUser){

      localStorage.removeItem("empUser");
      empDispatch({ type: "LOGOUT" });
      
    }
       
  };

  return (
    <Navbar className="navbar">
      <Container>
        <div className="left-group">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <span className="line"></span>
          <div className="homePage">
            <Link to={"/emp"}><span>HOME</span></Link>
          </div>
        </div>
        <div className="right-group ">
          <div className="text-info" >
        <span className="text">user</span>
        <span className="line"></span>
          
          {empUser && <span className="username">{empUser.Username }</span>}
          
          </div>
          
          <div onClick={handelClick} className="logout">
          
           <img src={logout} />
            <span>Logout</span> 
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
export default EmpNavebar;
