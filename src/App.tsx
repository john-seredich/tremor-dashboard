import React, { useState } from "react";
import "@tremor/react/dist/esm/tremor.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

import styles from "./App.module.scss";

function App() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className={styles.app}>
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Navbar />
    </div>
  );
}

export default App;
