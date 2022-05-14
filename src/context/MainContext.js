import { createContext, useState, useEffect } from "react";

export const MainContext = createContext({
  data: [],
});

const Base_Url = "http://localhost:5000/api/v1";

export const MainContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(`${Base_Url}/articles`);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <MainContext.Provider value={{ data: data }}>
      {children}
    </MainContext.Provider>
  );
};