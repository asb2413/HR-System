export const useGetInfo = () => {
  const getInfo = async (key) => {
    const postsData = await (
      await fetch(`hr-system-asb2413s-projects.vercel.app/hr/${key.queryKey[1]}`, {
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
