import { useState } from "react";
import "@tremor/react/dist/esm/tremor.css";
import styles from "./App.module.scss";
import NewSidebar from "./components/NewSidebar/NewSidebar";
import NewNavbar from "./components/NewNavbar/NewNavbar";
import NewDashboard from "./components/NewDashboard/NewDashboard";

function App() {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className={styles.app}>
      {activeMenu && <NewSidebar />}
      <div className={styles.app__container}>
        <NewNavbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <NewDashboard />
      </div>
    </div>
  );
}

export default App;
