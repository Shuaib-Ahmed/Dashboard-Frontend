import React, { useContext } from "react";
import "./App.css";

import BarChart from "./components/charts/BarChart";
import { MainContext } from "./context/MainContext";

function App() {
  const { data } = useContext(MainContext);

  const result = [];

  if (data.length > 0) {
    data.forEach(({ intensity, relevence }) => {
      console.log(intensity, relevence);
    });
  }

  return (
    <div>
      <BarChart />
    </div>
  );
}

export default App;
