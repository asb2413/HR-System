import { Link } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useFormContext } from "../hooks/useFormStatesContext";
import { useAddEmpContext } from "../hooks/useAddEmpContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function LocalForm(props) {
  //form context
  const { emp_user } = useAddEmpContext();
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
  } = useFormContext();

  //signup form
  if (props.path === "/hr/signup") {
    return (
      <Form className="form_container" onSubmit={props.handleSubmit}>
        <div className="top_bar">
          <h1>Create Account</h1>
          <h1>{props.error}</h1>
        </div>

        <Container fluid>
          <Row className=" _1">
            <Col >
              {props.jsonMsg === "Thanks For Signup" && (
                <div style={{backgroundColor:'#00334E'}} className="jsonMsg ">
                  <span>{props.jsonMsg}</span>
                </div>
              )}

              {props.jsonMsg !== "Thanks For Signup" && (
                <div style={{backgroundColor:'#00334E'}} className="jsonMsg ">
                  <span>{props.jsonMsg}</span>
                </div>
              )}
            </Col>
          </Row>
          <Row className=" _2">
            <Col className="col" sm={12} md={6}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label> Full Name</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Name.setName(e.target.value);
                  }}
                  value={Name.name}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={6}>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Phone.setPhone(e.target.value);
                  }}
                  value={Phone.phone}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className=" _3">
            <Col className="col" xs={12} md={6}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label> Username</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Username.setUsername(e.target.value);
                  }}
                  value={Username.username}
                  type="text"
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={6}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Password.setPassword(e.target.value);
                  }}
                  value={Password.password}
                  type="password"
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className=" _4">
            <Col className="col" xs={12} md={6}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Email.setEmail(e.target.value);
                  }}
                  value={Email.email}
                  type="email"
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={6}>
              <Form.Group className="mb-3" controlId="identity">
                <Form.Label>Identity</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Identity.setIdentity(e.target.value);
                  }}
                  value={Identity.identity}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className=" _5">
            <Col className="col" xs={12} md={6}>
              <Form.Group className="mb-3" controlId="nationality">
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Nationality.setNationality(e.target.value);
                  }}
                  value={Nationality.nationality}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={6}>
              <Form.Group className="mb-3" controlId="job">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Job.setJob(e.target.value);
                  }}
                  value={Job.job}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className=" _6">
            <Col className="col" xs={12} md={6}>
              <Form.Group className="mb-3" controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Age.setAge(e.target.value);
                  }}
                  value={Age.age}
                  type="age"
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={6}>
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Gender.setGender(e.target.value);
                  }}
                  value={Gender.gender}
                  type="gender"
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="_7">
            <Col className="col" md={12}>
              <Button variant="primary" type="submit">
                SignUp
              </Button>
            </Col>
          </Row>
          <Row className=" _8">
            <Col className="col" xs={12} md={6}>
              <Link to={"/hr/login"}>
                <Button id="loginBtn" variant="primary">
                  Login
                </Button>
              </Link>
            </Col>
            <Col className="col" xs={12} md={6}>
              <Link to={"#"}>
                <Button id="empPortal" variant="primary">
                  Employee
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }

  //hr login form
  if (props.path === "/hr/login") {
    return (
      <Form className="form_container" onSubmit={props.handleSubmit}>
        <div className="top_bar">
          <h1>Login</h1>
        </div>
        <Container fluid>
        <Row className=" _1">
            <Col >

              {props.jsonMsg !== "Logedin" && (
                <div style={{backgroundColor:'#00334E'}} className="jsonMsg ">
                  <span>{props.jsonMsg}</span>
                </div>
              )}
            </Col>
          </Row>
          <Row className=" _2">
            <Col className="col" xs={12} md={12}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label> Username</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Username.setUsername(e.target.value);
                  }}
                  value={Username.username}
                  type="text"
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className=" _3">
            <Col className="col" xs={12} md={12}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Password.setPassword(e.target.value);
                  }}
                  value={Password.password}
                  type="password"
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="_7">
            <Col className="col" md={12}>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Col>
          </Row>
          <Row className=" _8">
            <Col className="col" xs={12} md={6}>
              <Link to={"/hr/signup"}>
                <Button id="signUpBtn" variant="primary">
                  SignUp
                </Button>
              </Link>
            </Col>
            <Col className="col" xs={12} md={6}>
              <Link to={"/emp/login"}>
                <Button id="empPortal" variant="primary">
                  Employee
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }

  //add employee forms
  if (props.path === "/hr/addemp") {
    return (
      <div className="add_emp">
       {!emp_user ?  
      <Form className="form_container" onSubmit={props.handleSubmit}>
        
        <Container fluid>
          <Row className=" _1">
            <Col >
              {props.jsonMsg === "Thanks For Signup" && (
                <div style={{backgroundColor:'#00334E'}} className="jsonMsg ">
                  <span>{props.jsonMsg}</span>
                </div>
              )}

              {props.jsonMsg !== "Thanks For Signup" && (
                <div style={{backgroundColor:'#00334E'}} className="jsonMsg ">
                  <span>{props.jsonMsg}</span>
                </div>
              )}
            </Col>
          </Row>
          <Row className=" _2">
            <Col className="col" sm={12} md={4}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label> Full Name</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Name.setName(e.target.value);
                  }}
                  value={Name.name}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Phone.setPhone(e.target.value);
                  }}

                  type="number"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g);
                  }}
                  value={Phone.phone}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Email.setEmail(e.target.value);
                  }}
                  
                  value={Email.email}
                  type="email"
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className=" _3">
            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label> Username</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Username.setUsername(e.target.value);
                  }}
                  value={Username.username}
                  type="text"
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Password.setPassword(e.target.value);
                  }}
                  value={Password.password}
                  type="password"
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="identity">
                <Form.Label>Identity</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Identity.setIdentity(e.target.value);
                  }}
                  value={Identity.identity}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className=" _4">
          <Col className="col" xs={12}  md={4}>
              <Form.Group className="mb-3" controlId="nationality">
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Nationality.setNationality(e.target.value);
                  }}
                  value={Nationality.nationality}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12}  md={4}>
              <Form.Group className="mb-3" controlId="birthDate">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    BirthDate.setBirthDate(e.target.value);
                  }}
                  value={BirthDate.birthDate}
                  autoComplete="off"
                  className=" date shadow-none"
                  type="date"
                  min="1940-01-01" max="2040-12-31"
                  
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12}  md={4}>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Address.setAddress(e.target.value);
                  }}
                  value={Address.address}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            
          </Row>
          <Row className=" _5">
            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Age.setAge(e.target.value);
                  }}

                  type="number"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g);
                  }}
                  value={Age.age}
                  
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Gender.setGender(e.target.value);
                  }}
                  value={Gender.gender}
                  type="gender"
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="emergencyPhone">
                <Form.Label>Phone 2</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    EmergencyPhone.setEmergencyPhone(e.target.value);
                  }}

                  type="number"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g);
                  }}
                  value={EmergencyPhone.emergencyPhone}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className=" _6">
           
          <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="job">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Job.setJob(e.target.value);
                  }}
                  value={Job.job}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="degree">
                <Form.Label>Degree</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Degree.setDegree(e.target.value);
                  }}
                  value={Degree.degree}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="department">
                <Form.Label>Department </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Department.setDepartment(e.target.value);
                  }}
                  value={Department.department}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className=" _7">
          <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="supervisor">
                <Form.Label>Supervisor</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Supervisor.setSupervisor(e.target.value);
                  }}
                  value={Supervisor.supervisor}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>

            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="workLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    WorkLocation.setWorkLocation(e.target.value);
                  }}
                  value={WorkLocation.workLocation}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
            <Col className="col" xs={12} md={4}>
              <Form.Group className="mb-3" controlId="salary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    Salary.setSalary(e.target.value);
                  }}

                  type="number"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g);
                  }}
                  value={Salary.salary}
                  autoComplete="off"
                  className="shadow-none"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="_8">
            <Col className="col" md={12}>
              <Button variant="primary" type="submit">
                Add Employee
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>: 
            //uploads
            <Form className="upload-form" onSubmit={props.handleUpload}>
              <Form.Group  className="mb-3">
              <Form.Label>Upload Employee Photo</Form.Label>
              <Form.Control type="file"
                 onChange={props.handleImg}
                className="shadow-none"  
                id="photo"
                accept="image/*"
                name="photo "
                required

              />
              </Form.Group>
              <Form.Group  className="mb-3">
              <Form.Label>Upload Employee Contract</Form.Label>
              <Form.Control type="file" 

                onChange={props.handleContract}
                className="shadow-none"
                accept="application/pdf"
                id="contract"
                name="contract"
                required

              />
              </Form.Group>
              <Button  type="submit">
                Upload
              </Button>
       
              </Form>}
              </div>
         
    );
  }

  if (props.comp === "addPayroll") {
    return (
      <Form onSubmit={props.handleSubmit}>
        {props.successfully&&<Form.Label
        style={{width:'100%',backgroundColor:'#00334E',color:"white",border:'none',textAlign:'center',borderRadius:'13px'}}
        >{props.successfully}</Form.Label>}
        <Form.Group className="mb-3" controlId="baseSalary">
          <Form.Label>Base Salary</Form.Label>
          <Form.Control
            onChange={(e) => {
              props.baseSalary(e.target.value);
            }}
            type="number"
            placeholder="Enter Base Salary"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g);
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="allowances">
          <Form.Label>Allowances</Form.Label>
          <Form.Control
            onChange={(e) => {
              props.allowances(e.target.value);
            }}
            type="number"
            placeholder="Enter Allowances"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g);
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="overtime">
          <Form.Label>Overtime</Form.Label>
          <Form.Control
            onChange={(e) => {
              props.overtime(e.target.value);
            }}
            type="number"
            placeholder="Enter Allowances"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g);
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="reward">
          <Form.Label>Reward</Form.Label>
          <Form.Control
            onChange={(e) => {
              props.reward(e.target.value);
            }}
            type="number"
            placeholder="Enter Reward"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g);
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="else">
          <Form.Label>
            {" "}
            Any other value ("recommended": type an explanation in the notes
            below){" "}
          </Form.Label>
          <Form.Control
            onChange={(e) => {
              props.Else(e.target.value);
            }}
            type="number"
            placeholder="Enter the value"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g);
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date from to</Form.Label>
          <Form.Control
            onChange={(e) => {
              props.date(e.target.value);
            }}
            type="text"
            placeholder="Enter Date"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="total">
          <Form.Label>Total</Form.Label>
          <Form.Control
            onChange={(e) => {
              props.total(e.target.value);
            }}
            type="number"
            placeholder="Enter Date"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g);
            }}
            required
          />

          <InputGroup id="notes">
            <InputGroup.Text>Notes</InputGroup.Text>
            <Form.Control
              onChange={(e) => {
                props.note(e.target.value);
              }}
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
        </Form.Group>
        <Button  style={{width:'100%',backgroundColor:'#00334E',color:"white",border:'none'}} variant="primary" type="submit">
          add
        </Button>
      </Form>
    );
  }

  if (props.comp === "addAttendance") {
    return (
      <Form onSubmit={props.handleSubmitAtt}>
        {props.successfully&&<Form.Label
        style={{width:'100%',backgroundColor:'#00334E',color:"white",border:'none',textAlign:'center',borderRadius:'13px'}}
        >{props.successfully}</Form.Label>}
        <Form.Group className="mb-3" controlId="day">
        <Form.Label>day</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => {
            props.day(e.target.value);
          }}
          required
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
        <Form.Label>date</Form.Label>
        <Form.Control
          type="date"
          onChange={(e) => {
            props.date(e.target.value);
          }}
          required
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="time">
        <Form.Label>time</Form.Label>
        <Form.Control
          type="time"
          onChange={(e) => {
            props.time(e.target.value);
          }}
          required
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="overtime">
        <Form.Label>overtime</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => {
            props.overtime(e.target.value);
          }}
          required
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="note">
        <Form.Label >note</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          onChange={(e) => {
            props.note(e.target.value);
          }}
        />
        </Form.Group>
        <Button  style={{width:'100%',backgroundColor:'#00334E',color:"white",border:'none'}} type="submit">add</Button>
      </Form>
    );
  }
  //EMPPLOYEE-----------------------------------------------------------------------------EMPPLOYEE
//emp login
if (props.path === "/emp/login") {
  return (
    <Form className="form_container" onSubmit={props.handleSubmit}>
      <div className="top_bar">
        <h1>Login</h1>
      </div>
      <Container fluid>
      <Row className=" _1">
          <Col >

            {props.jsonMsg !== "Logedin" && (
              <div style={{backgroundColor:'#00334E'}} className="jsonMsg ">
                <span>{props.jsonMsg}</span>
              </div>
            )}
          </Col>
        </Row>
        <Row className=" _2">
          <Col className="col" xs={12} md={12}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label> Username</Form.Label>
              <Form.Control
                onChange={(e) => {
                  Username.setUsername(e.target.value);
                }}
                value={Username.username}
                type="text"
                autoComplete="off"
                className="shadow-none"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className=" _3">
          <Col className="col" xs={12} md={12}>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  Password.setPassword(e.target.value);
                }}
                value={Password.password}
                type="password"
                autoComplete="off"
                className="shadow-none"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="_7">
          <Col className="col" md={12}>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Col>
        </Row>
        <Row className=" _8">
          <Col className="col" xs={12} md={12}>
            <Link to={"/hr/login"}>
              <Button id="signUpBtn" variant="primary">
               HR PORTAL
              </Button>
            </Link>
          </Col>
         
        </Row>
      </Container>
    </Form>
  );
}
if (props.comp === "addRequest") {
  return (
    <Form onSubmit={props.addRequest}>
      {props.successfully&&<Form.Label
        style={{width:'100%',backgroundColor:'#00334E',color:"white",border:'none',textAlign:'center',borderRadius:'13px'}}
        >{props.successfully}</Form.Label>}
      <Form.Group className="mb-3" controlId="Type">
      <Form.Label>Type</Form.Label>
      <Form.Control
        type="text"
        onChange={(e) => {
          props.type(e.target.value);
        }}
        required
      />
      </Form.Group>
     
     
      <Form.Group className="mb-3" controlId="Details">
      <Form.Label >Details</Form.Label>
      <Form.Control
        type="text"
        as="textarea"
        required
        onChange={(e) => {
          props.details(e.target.value);
        }}
      />
      </Form.Group>
      <Button  style={{width:'100%',backgroundColor:'#00334E',color:"white",border:'none'}} type="submit">add</Button>
    </Form>
  );
}
}
export default LocalForm;
