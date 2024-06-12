import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useState,useEffect } from "react";
import dateFormat, { masks } from "dateformat";


const ShowPayroll_Emp = (props) => {
  let number = 0;
  const empUser = JSON.parse(localStorage.getItem("empUser"));
  const [data, setData] = useState(null)
  
  const getPayroll= async(id)=>{
      
    try {
      
      const res = await axios.post(
        "https://hr-system-757a8f8b9dbd.herokuapp.com/emp/empdetails/payroll",
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
    <div className="ShowPayroll">
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>createdAt</th>
            <th>baseSalary</th>
            <th>allowances</th>
            <th>overtime</th>
            <th>reward</th>
            <th>other value</th>
            <th>date From To</th>
            <th>total</th>
            <th>note</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((payroll) => (
              <tr key={payroll._id}>
                <td>{(number += 1)}</td>
                <td>{dateFormat(payroll.createdAt, "fullDate")}</td>
                <td>{payroll.baseSalary}</td>
                <td>{payroll.allowances}</td>
                <td>{payroll.overtime}</td>
                <td>{payroll.reward}</td>
                <td>{payroll.Else}</td>
                <td>{payroll.date}</td>
                <td>{payroll.total}</td>
                <td>{payroll.note}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShowPayroll_Emp;
