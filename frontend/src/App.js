import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from "./pages/HR_PAGES/Home";
import Login from "./pages/HR_PAGES/Login";
import Signup from "./pages/HR_PAGES/Signup";
import AddEmp from "./pages/HR_PAGES/AddEmp";
import MyProfile from "./pages/HR_PAGES/MyProfile";
import Employee from "./pages/HR_PAGES/Employee";
import EmpHome from "./pages/EMP_PAGES/EmpHome"
import EmpLogin from "./pages/EMP_PAGES/EmpLogin";

//components
import Footer from "./components/Footer";
import EmpDetails from "./pages/HR_PAGES/EmpDetails";
import EmpDetails_emp from "./pages/EMP_PAGES/EmpDetails_emp";
//context
import { useAuthContext } from "./hooks/useAuthContext";
import { useEmpAuthContext } from "./hooks/useEmpAuthContext";






function App() {
  
 
  const { user } = useAuthContext();
  const { empUser } = useEmpAuthContext();
  
  
 
  return (
    <div className="APP">

      <BrowserRouter>

      
        <Routes>
          
          
          <Route path="/" element={!user ? <Navigate to='/hr/login'/>:<Home/>}/>
          <Route path="/hr/login" element={user && !user.error  ? <Navigate to='/'/> : <Login/>} />
          <Route path="/hr/signup" element={!user ? <Signup />: <Navigate to='/'/>  } />
          <Route path="/hr/addemp" element={!user ?<Navigate to='/hr/login'/>:<AddEmp />} />
          <Route path="/hr/myProfile" element={!user ?<Navigate to='/hr/login'/>:<MyProfile />} />
          <Route path="/hr/employee" element={!user ?<Navigate to='/hr/login'/>:<Employee />} />
          <Route path="/hr/employee/:userId" element={!user ?<Navigate to='/hr/login'/>:<EmpDetails/>}/>
          {/* emp routes */}
          <Route path="/emp" element={!empUser ? <Navigate to='/emp/login'/>:<EmpHome/>}/>
          <Route path="/emp/login" element={empUser && !empUser.error  ? <Navigate to='/emp'/> : <EmpLogin/>} />
          <Route path="/emp/empdetails" element={!empUser ?<Navigate to='/emp/login'/>:<EmpDetails_emp/>}/>
        </Routes>

        { (user||empUser) && <Footer/>}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
