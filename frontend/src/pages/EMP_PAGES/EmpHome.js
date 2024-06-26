import { useEffect } from "react";
import '../../style/EmpHome/empHome.css'
import EmpNavebar from "../../components/EmpNavebar";
import Sections_Emp from "../../components/Sections_Emp"
function EmpHome() {
  const empUser = JSON.parse(localStorage.getItem("user"));

  
  useEffect(() => {
    const postToken = async () => {
      if (empUser) {
        const res = await fetch("https://hr-system-757a8f8b9dbd.herokuapp.com/emp", {
          method: "POST",
          headers: { Authorization: `Bearer ${empUser.token}` },
        });
        const json = await res.json();
        if (res.ok) {
          
        }

        if (!res.ok) {
          console.log(json.error);
        }
      }
    };

    postToken();
  }, [empUser]);

  return (
    <div className="EmpHome">
      <EmpNavebar/>
      <Sections_Emp/>
    </div>
  );
}
export default EmpHome;
