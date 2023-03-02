import styles from "./Navbar.module.scss";

import { MdNotifications } from "react-icons/md";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import profileImage from "./../../assets/avatar.jpg";
import { useState } from "react";

function Navbar() {
  const [lightMode, setLightMode] = useState(true);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__icons}>
        <button
          type="button"
          onClick={() => setLightMode((prevState) => !prevState)}
        >
          {lightMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
        <button type="button">
          <MdNotifications />
        </button>
        <button type="button">
          <AiFillSetting />
        </button>
        <button type="button">
          <img src={profileImage} alt="profile" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
