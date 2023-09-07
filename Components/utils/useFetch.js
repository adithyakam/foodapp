import react, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
      });
  };

  console.log(data, "data");

  return data;
};

export default useFetch;
