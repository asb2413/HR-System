import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { EmpContext } from "../pages/HR_PAGES/Employee";
import { ImUserTie } from "react-icons/im";
import SearchBar from "./SearchBar";
import { IoArrowBackCircle } from "react-icons/io5";

function EmpCard() {
  const { empData, dispatch, data } = useContext(EmpContext);

  if (empData && empData.error) {
    console.log(empData.error);
  }
  const handleClick = () => {
    dispatch({ type: "ALL", payload: data });

    if (empData && empData.typeInput) {
    }
  };

  return (
    <div className="EmpCard">
      <div
        className={
          empData && (empData.res || empData.error)  
            ? "result-container"
            : "container"
        }
      >
        <SearchBar />
        {empData &&
          empData.length > 1 &&
          empData.map((emp) => (
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

        {empData && empData.res && (
          
          <div className="result">
          <Link to={`/hr/employee/${empData.res.data._id}`}>
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
          <Button onClick={handleClick}>
          <IoArrowBackCircle />
        </Button>
        
          
          <p>key of the search not correct</p>
          <button onClick={handleClick}>
            <IoArrowBackCircle />
          </button>
        
        
        </div>
       
        ) }
      </div>
      
     
    </div>
  );
}
export default EmpCard;
