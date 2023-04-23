import { useEffect } from 'react';
import {Button,Form} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';



function SerchBar(props) {

  

    const handleSubmit = (e)=>{
      e.preventDefault()
      props.setUrl.current = '/employee/search'
      //console.log(props.setUrl.current)
    }

  

  return (

    <div className="SerchBar">
          
    <Form onSubmit={handleSubmit}>

    <Form.Group className="mb-3" controlId="identity">
      <Form.Label>search</Form.Label>
      <Form.Control onChange={(e)=>{props.setKey.key=e.target.value} } placeholder="Enter id, phone number or identity" />
    </Form.Group>
   
   <select 
   onChange={(e)=>{props.setType.type=e.target.value}}
   >
    <option value="id">ID</option>
    <option value="phone">Phone</option>

   </select>

    <Button variant="primary" type="submit">
      enter
    </Button >

    </Form>

  </div>
        
        
  )
}

export default SerchBar