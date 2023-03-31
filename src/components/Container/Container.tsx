import { useState } from "react";
import styles from "./Container.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

type Props = { children: React.ReactNode };

function Container(props: Props) {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className={styles.container}>
      {activeMenu && <Sidebar />}
      <div className={styles.container__content}>
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        {props.children}
      </div>
    </div>
  );
}

export default Container;
