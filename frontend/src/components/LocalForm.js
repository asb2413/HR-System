import {Button,Form} from 'react-bootstrap'
import { useFormContext } from '../hooks/useFormStatesContext'
import { useAddEmpContext } from "../hooks/useAddEmpContext"

function LocalForm(props) {
  //form context
  const {emp_user}= useAddEmpContext()
  const {

    Username,
    Password,
    Email,
    Phone,
    Identity,
    Age,
    Gender,
    Nationality,
    Job,
    Name,
    BirthDate,
    Address,
    Degree,
    Department,
    Supervisor,
    WorkLocation,
    Salary,
    EmergencyPhone,

  } = useFormContext()

  //signup form
if(props.path === '/hr/signup'){

  return (

    <div className="form">

    <Form  className=' signup' onSubmit={props.handelSubmit} >
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>username</Form.Label>
        <Form.Control onChange={(e)=>{Username.setUsername(e.target.value)}} value={Username.username} type="username" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>{Password.setPassword(e.target.value)}} value={Password.password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>email</Form.Label>
        <Form.Control onChange={(e)=>{Email.setEmail(e.target.value)}} value={Email.email} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>phone</Form.Label>
        <Form.Control onChange={(e)=>{Phone.setPhone(e.target.value)}} value={Phone.phone} type="phone" placeholder="Enter phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>name</Form.Label>
        <Form.Control onChange={(e)=>{Name.setName(e.target.value)}} value={Name.name} type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="identity">
        <Form.Label>identity</Form.Label>
        <Form.Control onChange={(e)=>{Identity.setIdentity(e.target.value)}} value={Identity.identity} type="identity" placeholder="Enter identity" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="nationality">
        <Form.Label>nationality</Form.Label>
        <Form.Control onChange={(e)=>{Nationality.setNationality(e.target.value)}} value={Nationality.nationality} type="nationality" placeholder="Enter nationality" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="job">
        <Form.Label>Job title</Form.Label>
        <Form.Control onChange={(e)=>{Job.setJob(e.target.value)}} value={Job.job} type="Job" placeholder="Enter Job" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="age">
        <Form.Label>age</Form.Label>
        <Form.Control onChange={(e)=>{Age.setAge(e.target.value)}} value={Age.age} type="age" placeholder="Enter age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="gender">
        <Form.Label>gender</Form.Label>
        <Form.Control onChange={(e)=>{Gender.setGender(e.target.value)}} value={Gender.gender} type="gender" placeholder="Enter gender"  />
      </Form.Group>

      
     
      <Button  variant="primary" type="submit">
        signup
      </Button >

    </Form>

    </div>
  )

}

//login form
if(props.path === '/hr/login'){

  return (

      <div className="form">
      
    <Form onSubmit={props.handelSubmit}>

    <Form.Group className="mb-3" controlId="username">
      <Form.Label>Username</Form.Label>
      <Form.Control onChange={(e)=>{Username.setUsername(e.target.value)}} value={Username.username} type="username" placeholder="Enter username" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="password">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={(e)=>{Password.setPassword(e.target.value)}} value={Password.password} type="password" placeholder="Password" />
    </Form.Group>

    <Button  variant="primary" type="submit">
      login
    </Button >

    </Form>

  </div>

    
  )

}


//add employee forms
if(props.path === '/hr/addemp'){

  return (

    <div className="form">

    <Form  className='add' onSubmit={props.handelSubmit} >
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>username</Form.Label>
        <Form.Control onChange={(e)=>{Username.setUsername(e.target.value)}} value={Username.username} type="username" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>{Password.setPassword(e.target.value)}} value={Password.password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>email</Form.Label>
        <Form.Control onChange={(e)=>{Email.setEmail(e.target.value)}} value={Email.email} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>phone</Form.Label>
        <Form.Control onChange={(e)=>{Phone.setPhone(e.target.value)}} value={Phone.phone} type="phone" placeholder="Enter phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>full name</Form.Label>
        <Form.Control onChange={(e)=>{Name.setName(e.target.value)}} value={Name.name} type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Birth Date">
        <Form.Label>Birth Date</Form.Label>
        <Form.Control onChange={(e)=>{BirthDate.setBirthDate(e.target.value)}} value={BirthDate.birthDate} type="Date" placeholder="Enter Birth Date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Address">
        <Form.Label>Address</Form.Label>
        <Form.Control onChange={(e)=>{Address.setAddress(e.target.value)}} value={Address.address} type="text" placeholder="Enter Addresse" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="identity">
        <Form.Label>identity</Form.Label>
        <Form.Control onChange={(e)=>{Identity.setIdentity(e.target.value)}} value={Identity.identity} type="identity" placeholder="Enter identity" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="nationality">
        <Form.Label>nationality</Form.Label>
        <Form.Control onChange={(e)=>{Nationality.setNationality(e.target.value)}} value={Nationality.nationality} type="nationality" placeholder="Enter nationality" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="age">
        <Form.Label>age</Form.Label>
        <Form.Control onChange={(e)=>{Age.setAge(e.target.value)}} value={Age.age} type="age" placeholder="Enter age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="gender">
        <Form.Label>gender</Form.Label>
        <Form.Control onChange={(e)=>{Gender.setGender(e.target.value)}} value={Gender.gender} type="gender" placeholder="Enter gender"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="job">
        <Form.Label>Job title</Form.Label>
        <Form.Control onChange={(e)=>{Job.setJob(e.target.value)}} value={Job.job} type="Job" placeholder="Enter Job" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Degree">
        <Form.Label>Degree</Form.Label>
        <Form.Control onChange={(e)=>{Degree.setDegree(e.target.value)}} value={Degree.degree} type="text" placeholder="Enter Degree" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Department">
        <Form.Label>Department</Form.Label>
        <Form.Control onChange={(e)=>{Department.setDepartment(e.target.value)}} value={Department.department} type="text" placeholder="Enter Department" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Supervisor">
        <Form.Label>Supervisor</Form.Label>
        <Form.Control onChange={(e)=>{Supervisor.setSupervisor(e.target.value)}} value={Supervisor.supervisor} type="text" placeholder="Enter Supervisor" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="WorkLocation">
        <Form.Label>Work Location</Form.Label>
        <Form.Control onChange={(e)=>{WorkLocation.setWorkLocation(e.target.value)}} value={WorkLocation.workLocation} type="text" placeholder="Enter Work Location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Salary">
        <Form.Label>Salary</Form.Label>
        <Form.Control onChange={(e)=>{Salary.setSalary(e.target.value)}} value={Salary.salary} type="text" placeholder="Enter Salary" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="EmergencyPhone">
        <Form.Label>EmergencyPhone</Form.Label>
        <Form.Control onChange={(e)=>{EmergencyPhone.setEmergencyPhone(e.target.value)}} value={EmergencyPhone.emergencyPhone} type="text" placeholder="Enter EmergencyPhone" />
      </Form.Group>
    
      <Button  variant="primary" type="submit">
       add
      </Button >

    </Form>
    
    
    <Form onSubmit={props.handelUpload}>

      {emp_user ?
      //uploads
      <>
      <label htmlFor="photo">upload photo</label>
      <input onChange={props.handelImg}  type="file" id="photo"  name='photo ' required/>
      <label htmlFor="contract">upload contract</label>
      <input onChange={props.handelContract}  type="file" id="contract"  name='contract' required/>
      <Button  variant="primary" type="submit">
       upload
      </Button >
      </> : null

      }
      

    </Form>

    </div>

  )

}


  
}
export default LocalForm