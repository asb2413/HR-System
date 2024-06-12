import { Table, Button } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dateFormat from "dateformat";
import { useGetInfo } from "../hooks/useGetInfo";

const ShowAttendance = (props) => {
  let number = 0;
  const { getInfo } = useGetInfo();
  const user = JSON.parse(localStorage.getItem("user"));
  const { data, status, refetch } = useQuery(
    ["user", "/employee/attendance/show", user, { emp_id: props.props }],
    getInfo
  );

  const handlesubmit = async (e, attendance_id) => {
    e.preventDefault();

    try {
      const res = await axios.delete(
        "https://hr-system-iy2g.onrender.com/hr/employee/attendance/delete",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
          data: { data: attendance_id },
        }
      );

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

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
            <th>action</th>
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
                <td>
                  <Button style={{backgroundColor:'#00334E',color:"white",border:'none'}} onClick={(e) => handlesubmit(e, attendance._id)}>
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
export default ShowAttendance;
