import styles from "./Navbar.module.scss";

import { MdNotifications } from "react-icons/md";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import profileImage from "./../../assets/avatar.jpg";
import { useState } from "react";
import Notification from "../Notification/Notification";

function Navbar() {
  const [lightMode, setLightMode] = useState(true);
  const [menuToggle, setMenuToggle] = useState(false);
  const [notif, setNotif] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__icons}>
        <button
          type="button"
          onClick={() => setMenuToggle((prevToggle) => !prevToggle)}
        >
          {menuToggle ? (
            <MdArrowDropUp className={styles.navbar__icons_svg} />
          ) : (
            <MdArrowDropDown className={styles.navbar__icons_svg} />
          )}
        </button>
        {menuToggle && (
          <div className={styles.navbar__icons_container}>
            <button
              type="button"
              onClick={() => setLightMode((prevState) => !prevState)}
            >
              {lightMode ? <BsFillSunFill /> : <BsFillMoonFill />}
            </button>
            <div>
              <button
                type="button"
                onClick={() => setNotif((prevState) => !prevState)}
              >
                <MdNotifications />
              </button>
              {notif && <Notification />}
            </div>
            <button type="button">
              <AiFillSetting />
            </button>
            <button type="button">
              <img src={profileImage} alt="profile" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
