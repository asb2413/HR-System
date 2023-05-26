import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState,useEffect, Fragment } from "react";
//pages
import Home from "./pages/HR_PAGES/Home";
import Login from "./pages/HR_PAGES/Login";
import Signup from "./pages/HR_PAGES/Signup";
import AddEmp from "./pages/HR_PAGES/AddEmp";
import MyProfile from "./pages/HR_PAGES/MyProfile";
import Employee from "./pages/HR_PAGES/Employee";

//components
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import EmpDetails from "./pages/HR_PAGES/EmpDetails";
//context
import { useAuthContext } from "./hooks/useAuthContext";




function App() {
  
  const { user } = useAuthContext();
 
 
  return (
    <div className="APP">

      <BrowserRouter>

      {user && <Navebar/>}
      
      
        <Routes>
          <Route path="/" element={!user ?<Navigate to='/hr/login'/>:<Home />} />
          <Route path="/hr/login" element={user && !user.error  ? <Navigate to='/'/> : <Login/>} />
          <Route path="/hr/signup" element={!user ? <Signup />: <Navigate to='/'/>  } />
          <Route path="/hr/addemp" element={!user ?<Navigate to='/hr/login'/>:<AddEmp />} />
          <Route path="/hr/myProfile" element={!user ?<Navigate to='/hr/login'/>:<MyProfile />} />
          <Route path="/hr/employee" element={!user ?<Navigate to='/hr/login'/>:<Employee />} />
          <Route path="/hr/employee/:userId" element={!user ?<Navigate to='/hr/login'/>:<EmpDetails/>}/>
          
        </Routes>

        {user && <Footer/>}
      </BrowserRouter>
    </div>
  );
}

export default App;
