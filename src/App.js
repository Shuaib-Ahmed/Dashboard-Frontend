import React, { useContext } from "react";
import "./App.css";

import BarChart from "./components/charts/BarChart";
import DonutChart from "./components/charts/DonutChart";
import SimpleBar from "./components/charts/SimpleBar";
import ScrollChart from "./components/charts/ScrollChart";

import LoadingSpinner from "./components/LoadingSpinner";

import { MainContext } from "./context/MainContext";

function App() {
  const { data, loading } = useContext(MainContext);

  return (
    <div>
      {loading && <LoadingSpinner />}
      {!loading && (
        <div className="chartsContainer">
          <div className="chartContainer">
            <BarChart data={data} />
          </div>
          <div className="chartContainer">
            <DonutChart data={data} />
          </div>
          <div className="chartContainer">
            <SimpleBar data={data} />
          </div>
          <div className="chartContainer">
            <ScrollChart data={data} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
