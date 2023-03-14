import { useState } from "react";
import "@tremor/react/dist/esm/tremor.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

import styles from "./App.module.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import NewSidebar from "./components/NewSidebar/NewSidebar";
import NewNavbar from "./components/NewNavbar/NewNavbar";

function App() {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className={styles.app}>
      {activeMenu && <NewSidebar />}
      <NewNavbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} /> */}
      {/* <div className={styles.app__container}>
        <Navbar />
        <Dashboard />
      </div> */}
    </div>
  );
}

export default App;
