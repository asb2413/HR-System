import { useAddEmpContext } from "./useAddEmpContext";

export const useEmpUploads = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { dispatch, emp_user } = useAddEmpContext();

  //post data hook
  const empUpload = async (photo, contract, URL) => {
    //form-data for posting upload files with json files
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("contract", contract);
    formData.append("id", JSON.stringify(emp_user));

    const res = await fetch(`https://hr-system-gamma.vercel.app/hr/${URL}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${user.token}` },
      body: formData,
    });
    const json = await res.json();

    if (json.msg) {
      dispatch({type:"UPLOADED" , payload:null});
      
    }

  };

  return { empUpload };
};
