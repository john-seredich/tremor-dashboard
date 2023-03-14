import styles from "./NewNavbar.module.scss";

import { MdNotifications } from "react-icons/md";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

type Props = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function NewNavbar({ activeMenu, setActiveMenu }: Props) {
  const handleMenuToggle = () => setActiveMenu((prevMenu) => !prevMenu);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__container}>
          <button
            className={styles.navbar__container__menubtn}
            type="button"
            onClick={handleMenuToggle}
          >
            <AiOutlineMenu />
          </button>
          <div className={styles.navbar__menu}>
            <button type="button" className={styles.navbar__menu__btn}>
              <MdNotifications />
            </button>
            <button type="button" className={styles.navbar__menu__btn}>
              <AiFillSetting />
            </button>
            <button type="button" className={styles.navbar__menu__btn}>
              <FiMoreVertical />
            </button>
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
