export const useGetInfo = () => {
  const getInfo = async (key) => {
    const postsData = await (
      await fetch(`https://hr-system-iy2g.onrender.com/hr/${key.queryKey[1]}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key.queryKey[2].token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(key.queryKey[3]),
      })
    ).json();

    return postsData;
  };

  return { getInfo };
};
