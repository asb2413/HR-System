import { FormContext } from "../context/HR-context/formContext";
import { useContext } from "react";

export const useFormContext = () => {
  //consoming context hook
  const context = useContext(FormContext);

  if (!context) {
    throw Error("useAuthContext must be use inside  AuthContextProvider");
  }

  return context;
};
