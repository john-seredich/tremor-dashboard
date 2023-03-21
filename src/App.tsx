import { useState } from "react";
import "@tremor/react/dist/esm/tremor.css";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className={styles.app}>
      {activeMenu && <Sidebar />}
      <div className={styles.app__container}>
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
