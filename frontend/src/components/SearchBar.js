import {Form,InputGroup,DropdownButton,Dropdown,Button} from 'react-bootstrap'
import { useContext, useRef } from "react";
import axios from "axios";
import { EmpContext } from "../pages/HR_PAGES/Employee";
import { FaSearch } from "react-icons/fa";


function SearchBar() {
  const { empData, dispatch } = useContext(EmpContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const typeInput = useRef();
  const searchInput = useRef();
  const type = useRef("_id");
  const search = useRef(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(
        "https://hr-system-iy2g.onrender.com/hr/employee/search",
        { data: { [type.current]: search.current } },

        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
        }
      );

      dispatch({ type: "ONE", payload: { res, typeInput } });
      searchInput.current.value = null;
      search.current = null;
    } catch (error) {
      searchInput.current.value = null;
      dispatch({ type: "ONE", payload: { error: error } });
    }
  };

  return (

    
    <div className="SerchBar">
      <form className='search-form' onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          className='search-input shadow-none'
          aria-describedby="basic-addon2"
          ref={searchInput}
          onChange={(e) => {
            search.current = e.target.value;
          }}
        />
        <Form.Select 
        ref={typeInput}
        className='shadow-none'
        onChange={(e) => {
          type.current = e.target.value;
        }}
        placeholder=''
        >
      <option value="_id">id</option>
      <option value="identity">identity</option>
      <option value="phone">phone</option>
    </Form.Select>
    
      </InputGroup>
      <Button type='submit'  id="button-addon2">
      <FaSearch/>
      </Button>
        
        </form>
      
      

    </div>
  );
}

export default SearchBar;
