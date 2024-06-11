import { useState } from "react";
import { Link , useParams } from "react-router-dom";
import axios from "axios";
import LocalForm from "./LocalForm";
import ShowPayroll from "./ShowPayroll";
import { Button } from "react-bootstrap";
const PayRoll = () => {
  const { userId } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const [comp, setComp] = useState(null);
  const [baseSalary, setBaseSalary] = useState(null);
  const [allowances, setAllowances] = useState(null);
  const [overtime, setOvertime] = useState(null);
  const [reward, setReward] = useState(null);
  const [Else, setElse] = useState(null);
  const [total, setTotal] = useState(null);
  const [date, setDate] = useState(null);
  const [note, setNote] = useState(null);

  const data = {
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
    <div className="PayRoll">
      <Button onClick={() => setComp("showPayroll")}>show payroll</Button>
      <button onClick={() => setComp("addPayroll")}>add to payroll</button>
      {comp === "addPayroll" && (
        <LocalForm
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
    </div>
  );
};
export default PayRoll;
