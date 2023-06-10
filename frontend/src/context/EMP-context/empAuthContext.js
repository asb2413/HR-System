import { createContext, useEffect, useReducer } from "react";

//create new context for user auth
export const EmpAuthContext = createContext();

//reducer for state of user
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { empUser: action.payload };

    case "LOGOUT":
      return { empUser: null };
    default:
      return state;
  }
};

export const EmpAuthContextProvider = ({ children }) => {
  const [state, empDispatch] = useReducer(authReducer, { empUser: null });

  useEffect(() => {
    const empUser = JSON.parse(localStorage.getItem("empUser"));
    empDispatch({ type: "LOGIN", payload: empUser });
  }, []);

  return (
    <EmpAuthContext.Provider value={{ ...state, empDispatch }}>
      {children}
    </EmpAuthContext.Provider>
  );
};
