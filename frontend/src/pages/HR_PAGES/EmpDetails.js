import { useState ,useEffect,useRef} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ShowPayroll from "../../components/ShowPayroll";
import ShowAttendance from "../../components/ShowAttendance";
import Request from "../../components/Request";
import LocalForm from "../../components/LocalForm";
import { ImUserTie } from "react-icons/im";
import { BiMoney,BiCalendar,BiIdCard,BiListCheck } from "react-icons/bi";
import Navebar from "../../components/Navbar";

import "../../style/EmpDetails/empDetails.css";
import ShowEmpProfile from "../../components/ShowEmpProfile";


const EmpDetails = () => {
  const [data, setdata] = useState(null)
  const [successfully, setSuccessfully] = useState(null)
  const user = JSON.parse(localStorage.getItem("user"));
  const { userId } = useParams();
  const getEmp= async(userId)=>{
      
    try {
      
      const res = await axios.post(
        "http://localhost:3000/hr/employee/search",
        { data: { _id: userId } },
    
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
        }
      );
    
      
      setdata(res.data)
      
        
    } catch (error) {
      
      console.log(error)
    }
        
    
      }
    
    
      
  useEffect(() => {

    getEmp(userId) 
    
  }, [])
  


  const [comp, setComp] = useState(null);
  const [baseSalary, setBaseSalary] = useState(null);
  const [allowances, setAllowances] = useState(null);
  const [overtime, setOvertime] = useState(null);
  const [reward, setReward] = useState(null);
  const [Else, setElse] = useState(null);
  const [total, setTotal] = useState(null);
  const [date, setDate] = useState(null);
  const [note, setNote] = useState(null);
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);

  // payroll data
  const Paydata = {
    emp_id: userId,
    hr_id: user && user.id,
    baseSalary: baseSalary,
    allowances: allowances,
    overtime: overtime,
    reward: reward,
    Else: Else,
    total: total,
    date: date,
    note: note,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/hr/employee/payroll/add",
        { data: Paydata },

        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
        }
      );

      setSuccessfully('successfully')
      setTimeout(()=>{

        setSuccessfully(null)

      },4000)
    } catch (error) {
      
      console.log(error);
    }
  };

  // Attendance data
  const Attdata = {
    emp_id: userId,
    hr_id: user && user.id,
    day: day,
    date: date,
    time: time,
    overtime: overtime,
    note: note,
  };

  const handleSubmitAtt = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/hr/employee/attendance/add",
        { data: Attdata },

        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
        }
      );
      setSuccessfully('successfully')
      setTimeout(()=>{
        
        setSuccessfully(null)

      },4000)
    } catch (error) {
      
      console.log(error);
    }
  };

  return (
    <div className="empDetails">
      <Navebar/>
      <div className="sidebar">
      <div className="info">
            <ImUserTie />
            <span className="username">{data && data.name}</span>
            <span className="id">{userId}</span>
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
            <span
              className={comp === "addPayroll" ? "active button" : "button"}
              onClick={(e) => setComp("addPayroll")}
            >
              Add to Payroll
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
            <span
              className={comp === "addAttendance" ? "active button" : "button"}
              onClick={() => setComp("addAttendance")}
            >
              Add Attendance
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
        {comp === "addPayroll" && (
          <LocalForm
            successfully={successfully}
            comp={comp}
            handleSubmit={handleSubmit}
            baseSalary={setBaseSalary}
            allowances={setAllowances}
            overtime={setOvertime}
            reward={setReward}
            Else={setElse}
            total={setTotal}
            date={setDate}
            note={setNote}
          />
        )}

        {comp === "showPayroll" && <ShowPayroll props={userId} />}

        {comp === "addAttendance" && (
          <LocalForm
          successfully={successfully}
            comp={comp}
            handleSubmitAtt={handleSubmitAtt}
            day={setDay}
            date={setDate}
            time={setTime}
            overtime={setOvertime}
            note={setNote}
          />
        )}

        {comp === "showAttendance" && <ShowAttendance props={userId} />}
        {comp === "showRequest" && <Request props={userId} />}
        {comp === "showInfo" && <ShowEmpProfile data={data} />}
      </div>
    </div>
  );
};
export default EmpDetails;
