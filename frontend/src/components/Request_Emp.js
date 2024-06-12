import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useState,useEffect } from "react";
import dateFormat from "dateformat";
import { useGetInfo } from "../hooks/useGetInfo";



const Request_Emp = (props) => {
  let number = 0;
  
 
  const empUser = JSON.parse(localStorage.getItem("empUser"));

  const [data, setData] = useState(null)
  
  const getRequests= async(id)=>{
      
    try {
      
      const res = await axios.post(
        "https://hr-system-iy2g.onrender.com/emp/empdetails/requests",
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

        getRequests(empUser.id) 
        
      }, [])

  return (
    <div className="ShowRequest">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>createdAt</th>
            <th>type</th>
            <th>details</th>
            <th>request status</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((req) => (
              <tr key={req._id}>
                <td>{(number += 1)}</td>
                <td>{dateFormat(req.createdAt, "fullDate")}</td>
                <td>{req.type}</td>
                <td>{req.details}</td>
                <td>{req.reqStatus}</td>
    
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Request_Emp;
