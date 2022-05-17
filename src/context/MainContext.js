import { createContext, useState, useEffect } from "react";

export const MainContext = createContext({
  data: [],
  loading: false,
  filterData: {},
  changeFilter: (filter) => {},
});

const Base_Url = "http://localhost:5000/api/v1";

export const MainContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState({
    topic: "",
    country: "",
    region: "",
    sector: "",
    end_year: "",
    source: "",
  });

  const [url, setUrl] = useState(`${Base_Url}/articles`);

  const changeFilter = (filter) => {
    setFilterData({ ...filter });

    let newUrl = `${Base_Url}/articles/query/?`;

    for (const key in filter) {
      if (filter[key].length > 0) {
        if (newUrl.charAt(newUrl.length - 1) === "?") {
          newUrl += `${key}=${filter[key]}`;
        } else {
          newUrl += `&${key}=${filter[key]}`;
        }
      }
    }

    setUrl(newUrl);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <MainContext.Provider
      value={{
        data: data,
        loading: loading,
        filterData: filterData,
        changeFilter: changeFilter,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
