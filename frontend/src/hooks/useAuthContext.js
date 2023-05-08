import { AuthContext } from "../context/HR-context/authContext";
import { useContext } from "react";

export const useAuthContext = () => {
  //consoming context hook
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be use inside  AuthContextProvider");
  }

  return context;
};
