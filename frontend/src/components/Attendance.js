import axios from "axios";
import { useState } from "react";
import LocalForm from "./LocalForm";
import ShowAttendance from "./ShowAttendance";
const Attendance = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [comp, setComp] = useState(null);
  const [day, setDay] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [overtime, setOvertime] = useState(null);
  const [note, setNote] = useState(null);

  const data = {
    emp_id: props.userId,
    hr_id: user && user.id,
    day: day,
    date: date,
    time: time,
    overtime: overtime,
    note: note,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://hr-system-757a8f8b9dbd.herokuapp.com/hr/employee/attendance/add",
        { data: data },

        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <div className="Attendance">
      <button onClick={() => setComp("showAttendance")}>Show Attendance</button>
      <button onClick={() => setComp("addAttendance")}>Add Attendance</button>
      {comp === "addAttendance" && (
        <LocalForm
          comp={comp}
          handleSubmit={handleSubmit}
          day={setDay}
          date={setDate}
          time={setTime}
          overtime={setOvertime}
          note={setNote}
        />
      )}

      {comp === "showAttendance" && <ShowAttendance props={props.userId} />}
    </div>
  );
};
export default Attendance;
