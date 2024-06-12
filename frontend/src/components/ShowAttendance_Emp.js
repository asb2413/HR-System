import { Table, Button } from "react-bootstrap";
import { useState,useEffect } from "react";
import axios from "axios";
import dateFormat from "dateformat";


const ShowAttendance_Emp = (props) => {
  let number = 0;
  const empUser = JSON.parse(localStorage.getItem("empUser"));
  const [data, setData] = useState(null)
  const getPayroll= async(id)=>{
      
    try {
      
      const res = await axios.post(
        "https://hr-system-iy2g.onrender.com/emp/empdetails/attendance",
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

  return (
    <div className="ShowAttendance">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>createdAt</th>
            <th>day</th>
            <th>date</th>
            <th>time</th>
            <th>overtime</th>
            <th>note</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((attendance) => (
              <tr key={attendance._id}>
                <td>{(number += 1)}</td>
                <td>{dateFormat(attendance.createdAt, "fullDate")}</td>
                <td>{attendance.day}</td>
                <td>{attendance.date}</td>
                <td>{attendance.time}</td>
                <td>{attendance.overtime}</td>
                <td>{attendance.note}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
export default ShowAttendance_Emp;
