import { useState ,useEffect,useRef} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ImUserTie } from "react-icons/im";
import { BiMoney,BiCalendar,BiIdCard,BiListCheck } from "react-icons/bi";
import EmpNavebar from "../../components/EmpNavebar";

import "../../style/EmpDetails/empDetails.css";
import ShowEmpProfile from "../../components/ShowEmpProfile";
import ShowPayroll_Emp from "../../components/ShowPayroll_Emp";
import ShowAttendance_Emp from "../../components/ShowAttendance_Emp"
import Request_Emp from "../../components/Request_Emp";
import LocalForm from "../../components/LocalForm";


const EmpDetails_emp = () => {
  const [comp, setComp] = useState(null);
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [type, setType] = useState(null)
  const [details, setDetails] = useState(null)
  const [successfully, setSuccessfully] = useState(null)

  const empUser = JSON.parse(localStorage.getItem("empUser"));
  const getPayroll= async(id)=>{
      
    try {
      
      const res = await axios.post(
        "https://hr-system-757a8f8b9dbd.herokuapp.com/emp/empdetails/empInfoApi",
        { data:  id },
    
        {
          headers: {
            Authorization: `Bearer ${empUser.token}`,
            "Content-type": "application/json",
          },
        }
      );
    
      
      setData(res.data)
      
        
    } catch (error) {
      console.log(error)
    }
        
    
      }
  
      useEffect(() => {

        getPayroll(empUser.id) 
        
      }, [])



      const reqData = {

        emp_id:empUser.id,
        type:type,
        details:details

      }
      const addRequest = async (e)=>{

        e.preventDefault();
        
        try {
          const res = await axios.post(
            "https://hr-system-757a8f8b9dbd.herokuapp.com/emp/empdetails/requests/add",
            { data: reqData },
    
            {
              headers: {
                Authorization: `Bearer ${empUser.token}`,
                "Content-type": "application/json",
              },
            }
          );
          setSuccessfully('successfully')
          setTimeout(()=>{
    
            setSuccessfully(null)
    
          },4000)
        } catch (error) {
          setError(error.message)
          console.log(error);
        }

      }
  
  return(

    <div className="empDetails">
    <EmpNavebar/>
    <div className="sidebar">
    <div className="info">
          <ImUserTie />
          <span className="username">{data && data.name}</span>
          <span className="id">{empUser.id}</span>
        </div>
      <div className="sidebar-container">
        <div className="payroll">
          <div className="header">
            <BiMoney />
            <span>Payroll</span>
          </div>
          <span
            className={comp === "showPayroll" ? "active button" : "button"}
            onClick={(e) => setComp("showPayroll")}
          >
            Show Payroll
          </span>
          
        </div>
        <div className="attendance">
          <div className="header">
            <BiCalendar />
            <span>Attendance</span>
          </div>
          <span
            className={comp === "showAttendance" ? "active button" : "button"}
            onClick={() => setComp("showAttendance")}
          >
            Show Attendance
          </span>
          
        </div>
        <div className="request">
          <div className="header">
            <BiListCheck />
            <span>Requests</span>
          </div>
          <span
            className={comp === "showRequest" ? "active button" : "button"}
            onClick={() => setComp("showRequest")}
          >
            Show Requests
          </span>
          <span
              className={comp === "addRequest" ? "active button" : "button"}
              onClick={() => setComp("addRequest")}
            >
              Add Request
            </span>
        </div>
        <div className="empInfo">
          <div className="header">
            <BiIdCard />
            <span>Profile</span>
          </div>
          <span
            className={comp === "showInfo" ? "active button" : "button"}
            onClick={() => setComp("showInfo")}
          >
            Show Profile
          </span>
        </div>
      </div>
    </div>
    <div className="container">
    
      {comp === "showPayroll" && <ShowPayroll_Emp props={empUser.id} />}
      {comp === "showAttendance" && <ShowAttendance_Emp props={empUser.id} />}
      {comp === "showRequest" && <Request_Emp props={empUser.id} />}
      {comp === "showInfo" && <ShowEmpProfile data={data[0]} />}
      {comp === "addRequest" && <LocalForm 
      
      comp={comp}
      addRequest={addRequest}
      type={setType}
      details={setDetails}

      />}
    </div>
  </div>

  )
}
export default EmpDetails_emp ;
