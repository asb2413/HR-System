import { useAddEmpContext } from "./useAddEmpContext";
import { useFormContext } from "./useFormStatesContext";
export const useAddEmp = () => {
  const {
    Username,
    Password,
    Email,
    Phone,
    Identity,
    Age,
    Gender,
    Nationality,
    Job,
    Name,
    BirthDate,
    Address,
    Degree,
    Department,
    Supervisor,
    WorkLocation,
    Salary,
    EmergencyPhone,
    Photo,
    Contract,
  } = useFormContext();
  const user = JSON.parse(localStorage.getItem("user"));
  const { dispatch } = useAddEmpContext();

  //post data hook
  const addEmp = async (infos, URL) => {
    const res = await fetch(`https://hr-system-gamma.vercel.app/hr/${URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(infos),
    });
    const json = await res.json();
                                          
    if (res.ok) {
      console.log("User added successfully");
      dispatch({ type: "SIGNUP", payload: json });
      Username.setUsername('')
      Password.setPassword('')
      Email.setEmail('')
      Phone.setPhone('')
      Identity.setIdentity('')
      Age.setAge('')
      Gender.setGender('')
      Nationality.setNationality('')
      Job.setJob('')
      Name.setName('')
      BirthDate.setBirthDate('')
      Address.setAddress('')
      Degree.setDegree('')
      Department.setDepartment('')
      Supervisor.setSupervisor('')
      WorkLocation.setWorkLocation('')
      Salary.setSalary('')
      EmergencyPhone.setEmergencyPhone('')
      Photo.setPhoto('')
      Contract.setContract('')

    }

    if (!res.ok) {
      console.log(json.error);
    }
  };

  return { addEmp };
};
