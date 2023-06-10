import { useEffect,useState } from "react";
import Sections from "../../components/Sections";
import '../../style/home/home.css'
import Navebar from "../../components/Navbar";

function Home() {
  
  const user = JSON.parse(localStorage.getItem("user"));
  const empUser = JSON.parse(localStorage.getItem("empUser"));

  useEffect(() => {
    const postToken = async () => {
      if (user) {
        const res = await fetch("https://hr-system-production.up.railway.app/hr", {
          method: "POST",
          headers: { Authorization: `Bearer ${user.token}` },
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
  }, [user]);

  return (
    <div className="home">
      <Navebar/>
      <Sections />
    </div>
  );
}
export default Home;
