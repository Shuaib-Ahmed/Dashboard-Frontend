import React, { useContext, Fragment } from "react";
import "./App.css";

import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import ChartSection from "./components/ChartSection";

import { MainContext } from "./context/MainContext";

function App() {
  const { data, loading } = useContext(MainContext);

  return (
    <div>
      {loading && <LoadingSpinner />}
      {!loading && (
        <Fragment>
          <Navbar />
          <ChartSection data={data} />
        </Fragment>
      )}
    </div>
  );
}

export default App;
