import {Container,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../imgs/logo.svg'


import { useAuthContext } from "../hooks/useAuthContext"

function Navebar() {

  const {user,dispatch} = useAuthContext()
  const username =JSON.parse(localStorage.getItem('user')) 


 

  const handelClick = ()=>{

      dispatch({type:'LOGOUT'})
      localStorage.removeItem('user')
      

  }


  return (
    

<Navbar className="position-sticky navbar" bg="light" expand="lg">
      <Container>

      <Link to="/"><img className='logo'  src={logo} alt="" /></Link>
          
          <div className="links-container d-flex">
              
              <div className='profileBg'></div>
              {user ? <h3>{username.username}</h3>:<Link to="/hr/login">Login</Link>}
              
              <div className="logout"><button onClick={handelClick}>Logout</button></div>
            </div>
          
      </Container>
    </Navbar>

    
  )
}
export default Navebar