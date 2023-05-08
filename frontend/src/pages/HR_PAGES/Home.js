import { useEffect } from "react";
import Sections from "../../components/Sections";
import '../../style/home/home.css'

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));


  useEffect(() => {
    const postToken = async () => {
      if (user) {
        const res = await fetch("/hr", {
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
      <Sections />
    </div>
  );
}
export default Home;
