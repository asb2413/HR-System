function EmpCard(props) {

  return (

    
    <div className="EmpCard">
        
        {props.data && props.url ==='/employee'?
            
            props.data.map((emp)=>

            <div key={emp._id} className="card">

                <h1>{emp.name}</h1>
                <p>{emp._id}</p>
                <p>{emp.createdAt}</p>

            </div>

        ):console.log(props.url)}
        
        </div>
  )
}
export default EmpCard