import { createContext, useReducer} from "react";

//create new context for user auth
export const addContext = createContext();

//reducer for state of user
export const addReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { emp_user: action.payload };

    case "UPLOADED":
      return { emp_user: action.payload };

    default:
      return null;
  }
};

export const AddContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addReducer, { emp_user: null });

  return (
    <addContext.Provider value={{ ...state, dispatch }}>
      {children}
    </addContext.Provider>
  );
};
