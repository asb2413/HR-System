import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../imgs/logo-nodejs-2.svg";
import logout from "../imgs/box-arrow-right.svg";
import { useAuthContext } from "../hooks/useAuthContext";

function Navebar() {
  const { user, dispatch } = useAuthContext();

  const handelClick = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Navbar className="position-sticky navbar">
      <Container>
        <div className="left-group">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <span className="line"></span>
          <div className="pageName">
            <span>HOME</span>
          </div>
        </div>
        <div className="right-group ">
          <div className="text-info" >
        <span className="text">USER</span>
        <span className="line"></span>
          
          {user && <span className="username">{user.Username}</span>}
          
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
export default Navebar;
