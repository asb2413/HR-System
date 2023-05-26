import dateFormat, { masks } from "dateformat";

const ShowEmpProfile = (p) => {

  
  return (
    <div className="ShowEmpProfile">

          <div className="container">
            <span>ID: {p.data._id}</span>
            <span>Name: {p.data.name}</span>
            <span>Username: {p.data.username}</span>
            <span>Phone: {p.data.phone}</span>
            <span>Email: {p.data.email}</span>
            <span>Identity: {p.data.identity}</span>
            <span>Nationality: {p.data.nationality}</span>
            <span>Birth Date: {dateFormat(p.data.birthDate, "fullDate")}</span>
            <span>Age: {p.data.age}</span>
            <span>Gender: {p.data.gender}</span>
            <span>Job Name: {p.data.job}</span>
            <span>Degree: {p.data.degree}</span>
            <span>Department: {p.data.department}</span>
            <span>Supervisor: {p.data.supervisor}</span>
            <span>Work Location: {p.data.workLocation}</span>
            <span>Salary: {p.data.salary}</span>
            <span>Emergency Phone: {p.data.emergencyPhone}</span>

            </div>   

        </div>
  )
}
export default ShowEmpProfile