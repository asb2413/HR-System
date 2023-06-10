import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../imgs/logo-nodejs-2.svg";
import logout from "../imgs/box-arrow-right.svg";
import { useAuthContext } from "../hooks/useAuthContext";
import '../style/navbar/navbar.css'

function Navebar() {
  const { user, dispatch } = useAuthContext();

  const hrLogout = () => {
    if(user){

      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });

    }
  
      
  };


  return (
    <Navbar className=" navbar">
      <Container>
        <div className="left-group">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <span className="line"></span>
          <div className="homePage">
            <Link to={'/'}><span>HOME</span></Link>
          </div>
        </div>
        <div className="right-group ">
          <div className="text-info" >
        <span className="text">user</span>
        <span className="line"></span>
          
          {user && <span className="username">{user.Username }</span>}
          
          </div>

          
          <div onClick={hrLogout} className="logout">
           <img src={logout} alt=""/>
            <span>Logout</span> 
          </div>
          
        </div>
      </Container>
    </Navbar>
  );
}
export default Navebar;
