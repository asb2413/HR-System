import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import dateFormat, { masks } from "dateformat";
import { useGetInfo } from "../hooks/useGetInfo";

const ShowPayroll = (props) => {
  let number = 0;

  const { getInfo } = useGetInfo();
  const user = JSON.parse(localStorage.getItem("user"));

  const { data, status, refetch } = useQuery(
    ["user", "/employee/payroll/show", user, { emp_id: props.props }],
    getInfo
  );

  const handlesubmit = async (e, payroll_id) => {
    e.preventDefault();

    try {
      const res = await axios.delete(
        "https://hr-system-iy2g.onrender.com/hr/employee/payroll/delete",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
          data: { data: payroll_id },
        }
      );

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

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
            <th>action</th>
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
                <td>
                  <Button style={{backgroundColor:'#00334E',color:"white",border:'none'}} onClick={(e) => handlesubmit(e, payroll._id)}>
                  Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShowPayroll;
