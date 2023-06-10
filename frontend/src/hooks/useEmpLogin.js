import { useEmpAuthContext } from "./useEmpAuthContext";
export const useEmpLogin = () => {
  //post the data and get the token
  const { empDispatch } = useEmpAuthContext();
  const login = async (infos, URL,setjsonMsg) => {
    const res = await fetch(`${URL}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(infos),
    });

    const json = await res.json();

    if (json.token) {
      
      localStorage.setItem("empUser", JSON.stringify(json));
      empDispatch({ type: "LOGIN", payload: json });
      
    }

    if (json.error) {
      setjsonMsg(json.error)
    }
  };

  return { login };
};
