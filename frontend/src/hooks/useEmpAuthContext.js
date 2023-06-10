import { EmpAuthContext } from "../context/EMP-context/empAuthContext";
import { useContext } from "react";

export const useEmpAuthContext= () => {
  //consoming context hook
  const context = useContext(EmpAuthContext);

  if (!context) {
    throw Error("useAuthContext must be use inside  AuthContextProvider");
  }

  return context;
};
