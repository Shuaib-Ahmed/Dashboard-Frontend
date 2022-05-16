import React from "react";
import styles from "./css/LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lds_dual_ring}></div>
    </div>
  );
};

export default LoadingSpinner;
