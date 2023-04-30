import { useContext , useRef ,useState} from "react"
import axios from 'axios'
import { EmpContext } from "../pages/HR_PAGES/Employee"


function SearchBar() {
  const {empData,dispatch} = useContext(EmpContext) 
  const user =JSON.parse(localStorage.getItem('user'))
  const typeInput = useRef()
  const searchInput = useRef()
  //const [type, setType] = useState('id')
  const type = useRef('_id')
  const search = useRef(null)
  

  
    const handleSubmit = async(e)=>{
      e.preventDefault()
      
      
      console.log(search.current)
      console.log(type.current)
      try {

       const res = await axios.post('http://localhost:3000/hr/employee/search',
       {data:{[type.current]:search.current}},
       
       {

        headers:{'Authorization':`Bearer ${user.token}`,'Content-type': 'application/json'}

       })
       
      dispatch({type:'ONE',payload:{res,typeInput}})
      searchInput.current.value = null
      search.current = null  
      } catch (error) {
        searchInput.current.value = null
        dispatch({type:'ONE',payload:{error:error}})
        
      }
     
    }

    
    
    
  return (

    <div className="SerchBar">

      <form onSubmit={handleSubmit}>

        <input ref={searchInput}  type="text" onChange={(e)=> {search.current=e.target.value}} />
        <select ref={typeInput} onChange={(e)=> {type.current = e.target.value}}>
          <option value={'_id'}>id</option>
          <option>identity</option>
          <option>phone</option>
        </select>
        <button >search</button>
        
      </form>

    </div>
           
  )
}

export default SearchBar