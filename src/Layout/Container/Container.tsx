import { useState, useEffect, useCallback } from "react";
import styles from "./Container.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

type Props = { children: React.ReactNode };

function Container(props: Props) {
  const [activeMenu, setActiveMenu] = useState(false);

  const disableScroll = useCallback(() => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    if (html && body) {
      html.style.overflow = activeMenu ? "hidden" : "auto";
      html.style.position = activeMenu ? "relative" : "";
      body.style.position = activeMenu ? "relative" : "";
      body.style.height = activeMenu ? "100%" : "";
      body.style.overflowY = activeMenu ? "hidden" : "";
    }
  }, [activeMenu]);

  disableScroll();

  // useEffect(() => {
  //   const html = document.querySelector("html");
  //   if (html) {
  //     html.style.overflow = activeMenu ? "hidden" : "auto";
  //     html.style.overflow = activeMenu ? "relative" : "";
  //   }
  // }, [activeMenu]);

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
