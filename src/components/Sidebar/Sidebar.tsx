import styles from "./Sidebar.module.scss";
import { links } from "../../data/links";

function Sidebar() {
  const activeMenuItem = "Dashboard";

  return (
    <div className={styles.sidebar}>
      <a href="/" className={styles.sidebar__title}>
        BITUMEN
      </a>
      <div className={styles.sidebar__container}>
        {links.map((linkCategories, i) => {
          return (
            <div className={styles.sidebar__item} key={i}>
              {linkCategories.title && <h2>{linkCategories.title}</h2>}
              {linkCategories.links.map((link, i) => {
                return (
                  <a
                    href="/"
                    key={i}
                    className={
                      activeMenuItem === link.name ? styles.active : ""
                    }
                  >
                    {link.icon} <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
