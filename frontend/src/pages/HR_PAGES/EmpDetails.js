import { useState } from "react";
import { useParams } from "react-router-dom";
import PayRoll from "../../components/PayRoll";
import Attendance from "../../components/Attendance";

const EmpDetails = () => {
  const { userId } = useParams();
  const [component, setComponent] = useState(null);

  return (
    <div className="EmpDetails">
      <h1>{userId}</h1>
      <button
        onClick={() => {
          setComponent("payroll");
        }}
      >
        Payroll
      </button>
      <button
        onClick={() => {
          setComponent("attendance");
        }}
      >
        Attendance
      </button>
      {component === "payroll" && <PayRoll userId={userId} />}
      {component === "attendance" && <Attendance userId={userId} />}
    </div>
  );
};
export default EmpDetails;
