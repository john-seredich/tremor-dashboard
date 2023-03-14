import styles from "./NewSidebar.module.scss";
import { links } from "../../data/links";

function NewSidebar() {
  const activeMenuItem = "Dashboard";

  return (
    <div className={styles.mobile_sidebar}>
      <h1>BITUMEN</h1>
      <div className={styles.mobile_sidebar__container}>
        {links.map((linkCategories, i) => {
          return (
            <div className={styles.mobile_sidebar__item} key={i}>
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

export default NewSidebar;
