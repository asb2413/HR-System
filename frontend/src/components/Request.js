import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import dateFormat from "dateformat";
import { useGetInfo } from "../hooks/useGetInfo";
import { useState } from "react";


const Request = (props) => {
  let number = 0;
  
  const { getInfo } = useGetInfo();
  const user = JSON.parse(localStorage.getItem("user"));

  const { data, status, refetch } = useQuery(
    ["user", "/employee/request/show", user,  {emp_id:props.props} ],
    getInfo
  );

  const handlesubmit = async (e, request_id) => {
    e.preventDefault();
    
    console.log(request_id,e.target.value)
    try {
      const res = await axios.patch(
        "https://hr-system-iy2g.onrender.com/hr/employee/request/update",
        { data: request_id,reqStatus:e.target.value,action_user:user.Username},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
          
        }
      );

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

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
            <th>action</th>
            <th>action user</th>
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
                
                <td>
                  <Button style={{backgroundColor:'#00334E',color:"white",border:'none'}} value={'accepted'} onClick={(e) => handlesubmit(e, req._id)}>
                    accepted
                  </Button>
                  <Button style={{backgroundColor:'#00334E',color:"white",border:'none'}} value={'rejected'} onClick={(e) => handlesubmit(e, req._id)}>
                    rejected
                  </Button>
                </td>
                <td>
                {req.hr_id}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Request;
