import styles from "./Sidebar.module.scss";
import { links } from "../../data/links";
import { AiOutlineMenu } from "react-icons/ai";

type Props = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ activeMenu, setActiveMenu }: Props) {
  const activeItem = "Dashboard";
  const dynamicStyle = `${styles.sidebar} ${activeMenu}`;
  console.log(dynamicStyle);

  const linksElement = links.map((link, i) => {
    return (
      <div
        className={
          activeMenu ? styles.sidebar_open__item : styles.sidebar__item
        }
        key={i}
      >
        {/* Render title only if it has a title */}
        {link.title.length > 1 && <h3>{link.title}</h3>}

        {/* Render each link to an a element */}
        <div
          className={
            activeMenu
              ? styles.sidebar_open__item__links
              : styles.sidebar__item__links
          }
        >
          {link.links.map((linkItems, i) => {
            return (
              <a
                href="/"
                key={i}
                className={activeItem === linkItems.name ? styles.active : ""}
              >
                {linkItems.icon} <span>{linkItems.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className={activeMenu ? styles.sidebar_open : styles.sidebar}>
      <div
        className={
          activeMenu ? styles.sidebar_open__header : styles.sidebar__header
        }
      >
        <h2>BITUMEN</h2>
        <button
          type="button"
          onClick={() => setActiveMenu((prevState) => !prevState)}
        >
          <AiOutlineMenu />
        </button>
      </div>
      <div
        className={
          activeMenu
            ? styles.sidebar_open__container
            : styles.sidebar__container
        }
      >
        {linksElement}
      </div>
    </div>
  );
}

export default Sidebar;
