import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { EmpContext } from "../pages/HR_PAGES/Employee";
import { ImUserTie } from "react-icons/im";
import SearchBar from "./SearchBar";
import { IoArrowBackCircle } from "react-icons/io5";

function EmpCard() {
  const { empData, dispatch, data } = useContext(EmpContext);

  const handleClick = () => {
    dispatch({ type: "ALL", payload: data });

  };

  if(empData && empData.length > 1 ){

    return(
      <div className="EmpCard">
        <div className="container">
        <SearchBar />
        {empData.map((emp) => (
            <Link key={emp._id} to={`/hr/employee/${emp._id}`} className="box">
              <Card border="secondary" style={{ width: "18rem" }}>
                <Card.Header>
                  <ImUserTie />
                </Card.Header>
                <Card.Body>
                  <Card.Title>{emp.name}</Card.Title>
                  <Card.Text>{emp._id}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        
        </div>
        </div>
      
     
    )

  }

  if(empData && empData.res){

    return(
    <div className="EmpCard">
    <div className="result-container">
    <SearchBar />
    <Link  to={`/hr/employee/${empData.res.data._id}`} className="box">
    <Card border="secondary" style={{ width: "18rem" }}>
      <Card.Header>
        <ImUserTie />
      </Card.Header>
      <Card.Body>
        <Card.Title>{empData.res.data.name}</Card.Title>
        <Card.Text>{empData.res.data._id}</Card.Text>
      </Card.Body>
    </Card>
  </Link>
  <Button className="backBtn" onClick={handleClick}>Back</Button>

</div>
</div>
    )
  }

  if(empData && empData.error){

    return(

      <div className="EmpCard">
    <div className="result-container">
    <SearchBar />
    <span className="error-text">search key is not correct</span>
  <Button className="backBtn" onClick={handleClick}>Back</Button>

</div>
</div>

    )

  }
  
}
export default EmpCard;
