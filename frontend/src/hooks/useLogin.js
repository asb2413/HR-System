import { useAuthContext } from "./useAuthContext";
export const useLogin = () => {
  //post the data and get the token
  const { dispatch } = useAuthContext();
  const login = async (infos, URL,setjsonMsg) => {
    const res = await fetch(`${URL}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(infos),
    });

    const json = await res.json();

    if (json.token) {
      
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      
    }

    if (json.error) {
      setjsonMsg(json.error)
    }
  };

  return { login };
};
