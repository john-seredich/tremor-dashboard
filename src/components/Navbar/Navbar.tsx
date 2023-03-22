import { useMemo, useState } from "react";
import styles from "./Navbar.module.scss";
import { MdNotifications } from "react-icons/md";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import Notification from "../Notification/Notification";
import ThemeModal from "../ThemeModal/ThemeModal";
import NavbarDropdown from "../NavbarDropdown/NavbarDropdown";
import { TextInput } from "@tremor/react";
import { HiSearch } from "react-icons/hi";
import profileImg from "../../assets/avatar.jpg";

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAutoCloseMenus = useMemo(() => {
    // Closed any open menu's when sidebar is active
    if (activeMenu) {
      setDropdownToggle(false);
      setNotifToggle(false);
      setThemeModalToggle(false);
    }
  }, [activeMenu]);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__container}>
          {/* Menu Button  */}
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

          {/* Nav Container */}
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

            {/* Profile */}
            <div className={styles.profile_btn}>
              <img src={profileImg} alt="" />
              <p>John S.</p>
            </div>
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
