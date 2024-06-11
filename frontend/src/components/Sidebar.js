import { Link } from "react-router-dom"


const Sidebar = () => {
  return (

    <div className="sidebar">

<div className="container">

<div className="card">

</div>
<div className="payroll-sec">
<h1>Payroll</h1>
<Link to={"/hr/employee/:userId/payroll/show"}>show payroll</Link>
<Link to={"/hr/employee/:userId/payroll/show"}>add payroll</Link>
</div>
<div className="attendance-sec">
<h1>Payroll</h1>
<Link to={"/hr/employee/:userId/payroll/show"}>show attendance</Link>
<Link to={"/hr/employee/:userId/payroll/show"}>add attendance</Link>
</div>
<div className="attendance-sec">
<h1>Requests</h1>
<Link to={"/hr/employee/:userId/payroll/show"}>show Requests</Link>
</div>
</div>

    </div>
  )

}
export default Sidebar