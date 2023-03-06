import styles from "./Navbar.module.scss";

import { MdNotifications } from "react-icons/md";
import { BsFillSunFill, BsFillMoonFill, BsArrowUpShort } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import profileImage from "./../../assets/avatar.jpg";
import profileImage2 from "./../../assets/avatar2.jpg";
import { useState } from "react";

function Navbar() {
  const [lightMode, setLightMode] = useState(true);
  const [notif, setNotif] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__icons}>
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
          {notif && (
            <div className={styles.navbar__notification}>
              <div className={styles.navbar__notification__header}>
                <h2>Notification</h2>
                <p>3 New</p>
              </div>

              {/* Item 1 */}
              <div className={styles.navbar__notification__item}>
                <img src={profileImage} alt="" />
                <div className={styles.navbar__notification__item__content}>
                  <p>Congratulations John!</p>
                  <p>You have recieved a new follower.</p>
                </div>
                <p className={styles.navbar__notification__item_date}>Today</p>
              </div>

              {/* Item 2 */}
              <div className={styles.navbar__notification__item}>
                <img src={profileImage2} alt="" />
                <div className={styles.navbar__notification__item__content}>
                  <p>Participate in a survey.</p>
                  <p>As a new user please fill out this...</p>
                </div>
                <p className={styles.navbar__notification__item_date}>
                  Yesterday
                </p>
              </div>
              <div className={styles.navbar__notification__read}>
                <a href="/">Read all notifications</a>
              </div>
            </div>
          )}
        </div>
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
