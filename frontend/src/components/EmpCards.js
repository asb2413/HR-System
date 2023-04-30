import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import { useContext } from "react"
import { EmpContext } from "../pages/HR_PAGES/Employee"

function EmpCard() {

 const {empData,dispatch,data} = useContext(EmpContext) 
if(empData && empData.error ){

  console.log(empData.error)

}
 const handleClick = ()=>{

  dispatch({type:'ALL',payload:data})

  if(empData && empData.typeInput){


  }
  
 }

  return (

    <div className="EmpCard">
     
      {empData && empData.length > 1 && 
      
      empData.map(emp => 
        <Link key={emp._id} to={`/hr/employee/${emp._id}`}>
        <Card  border="secondary" style={{ width: '18rem' }}>
        <Card.Header>{emp._id}</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
        )
      
      }
      
      {empData && empData.res &&

        <div className="container">
          <Link  to={`/hr/employee/${empData.res.data._id}`}>
          <Card  border="secondary" style={{ width: '18rem' }}>
        <Card.Header>{empData.res.data._id}</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        <button onClick={handleClick}>back</button>
        </Link>
        </div>

      } 

      

      {empData && empData.error &&
      
        <div className="error">
          <p>key of the search not correct</p>
          <button onClick={handleClick}>back</button>
        </div>

      }

        </div>
  )
}
export default EmpCard