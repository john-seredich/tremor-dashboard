import { useState } from "react";
import styles from "./Navbar.module.scss";
import { MdNotifications } from "react-icons/md";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import Notification from "../Notification/Notification";
import ThemeModal from "../ThemeModal/ThemeModal";
import NavbarDropdown from "../NavbarDropdown/NavbarDropdown";
import { TextInput } from "@tremor/react";
import { HiSearch } from "react-icons/hi";

type Props = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ activeMenu, setActiveMenu }: Props) {
  const [notifToggle, setNotifToggle] = useState(false);
  const [themeModalToggle, setThemeModalToggle] = useState(false);
  const [dropdownToggle, setDropdownToggle] = useState(false);

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
          <div className={styles.navbar__menu}>
            <button
              className={styles.navbar__container__menubtn}
              type="button"
              onClick={handleMenuToggle}
            >
              <AiOutlineMenu />
            </button>
            <div className={styles.navbar__search}>
              <TextInput icon={HiSearch} placeholder="Search..." />
            </div>
          </div>

          {/* Notification */}
          <div className={styles.navbar__items}>
            <button
              type="button"
              className={styles.navbar__items__btn}
              onClick={handleNotifToggle}
            >
              <MdNotifications />
            </button>
            {notifToggle && <Notification />}

            {/* Settings */}
            <button
              type="button"
              className={styles.navbar__items__btn}
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
              className={`${styles.navbar__items__btn} ${styles.navbar__items__extend}`}
              onClick={handleDropdownToggle}
            >
              <FiMoreVertical />
            </button>
            {dropdownToggle && <NavbarDropdown />}
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

export default Navbar;
