import React, { useState } from "react";
import styles from "./css/Navbar.module.css";

import FilterModal from "./FilterModal";

const Navbar = () => {

  return (
    <nav className={styles.navContainer}>
      <h1>Dashboard</h1>
      <FilterModal />
    </nav>
  );
};

export default Navbar;
