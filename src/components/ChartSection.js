import React from "react";
import styles from "./css/ChartSection.module.css";

import BarChart from "./charts/BarChart";
import DonutChart from "./charts/DonutChart";
import SimpleBar from "./charts/SimpleBar";
import ScrollChart from "./charts/ScrollChart";

const ChartSection = ({ data }) => {
  return (
    <div className={styles.chartsContainer}>
      <div className={styles.chartContainer}>
        <BarChart data={data} />
      </div>
      <div className={styles.chartContainer}>
        <DonutChart data={data} />
      </div>
      <div className={styles.chartContainer}>
        <SimpleBar data={data} />
      </div>
      <div className={styles.chartContainer}>
        <ScrollChart data={data} />
      </div>
    </div>
  );
};

export default ChartSection;
