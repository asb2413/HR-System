import { useParams } from "react-router-dom"

const EmpDetails = () => {

  const {userId} = useParams()

  return (

    <div className="EmpDetails">
      
        <h1>{userId}</h1>
        

        </div>

  )
}
export default EmpDetails