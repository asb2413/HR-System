export const useSignup = () => {
  //post the data hook
  const signup = async (infos, URL,setjsonMsg) => {
    const res = await fetch(`https://hr-system-gamma.vercel.app/hr/${URL}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(infos),
    });
    const json = await res.json();

    if (json.message) {
      setjsonMsg('Thanks For Signup');
    }

    if (json.error) {
      setjsonMsg(json.error);
    }
  };
  return { signup };
};
