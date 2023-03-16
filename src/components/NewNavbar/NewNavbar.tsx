import { useState } from "react";
import styles from "./NewNavbar.module.scss";
import { MdNotifications } from "react-icons/md";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import Notification from "../Notification/Notification";
import ThemeModal from "../ThemeModal/ThemeModal";
import Dropdown from "../Dropdown/Dropdown";

type Props = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function NewNavbar({ activeMenu, setActiveMenu }: Props) {
  const [notifToggle, setNotifToggle] = useState(false);
  const [themeModalToggle, setThemeModalToggle] = useState(false);
  const [dropdownToggle, setDropdownToggle] = useState(true);

  const handleMenuToggle = () => setActiveMenu((prevMenu) => !prevMenu);
  const handleNotifToggle = () => setNotifToggle((prevToggle) => !prevToggle);
  const handleThemeModalToggle = () =>
    setThemeModalToggle((prevToggle) => !prevToggle);
  const handleDropdownToggle = () =>
    setDropdownToggle((prevToggle) => !prevToggle);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__container}>
          {/* Menu */}
          <button
            className={styles.navbar__container__menubtn}
            type="button"
            onClick={handleMenuToggle}
          >
            <AiOutlineMenu />
          </button>

          {/* Notification */}
          <div className={styles.navbar__menu}>
            <button
              type="button"
              className={styles.navbar__menu__btn}
              onClick={handleNotifToggle}
            >
              <MdNotifications />
            </button>
            {notifToggle && <Notification />}

            {/* Settings */}
            <button
              type="button"
              className={styles.navbar__menu__btn}
              onClick={handleThemeModalToggle}
            >
              <AiFillSetting />
            </button>
            {themeModalToggle && (
              <ThemeModal setThemeModalToggle={setThemeModalToggle} />
            )}

            {/* Extends */}
            <button
              type="button"
              className={styles.navbar__menu__btn}
              onClick={handleDropdownToggle}
            >
              <FiMoreVertical />
            </button>
            {dropdownToggle && <Dropdown />}
          </div>
        </div>
      </div>
      {activeMenu && (
        <div
          className={styles.overlay}
          onClick={() => setActiveMenu(false)}
        ></div>
      )}
    </>
  );
}

export default NewNavbar;
