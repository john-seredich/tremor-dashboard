import styles from "./Sidebar.module.scss";
import { links } from "../../links";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <Link to="/" className={styles.sidebar__title}>
        BITUMEN
      </Link>
      <div className={styles.sidebar__container}>
        {links.map((linkCategories, i) => {
          return (
            <div className={styles.sidebar__item} key={i}>
              {linkCategories.title && <h2>{linkCategories.title}</h2>}
              {linkCategories.links.map((link) => {
                return (
                  <Link
                    to={link.route}
                    key={link.name}
                    className={
                      location.pathname === link.route ? styles.active : ""
                    }
                  >
                    {link.icon} <span>{link.name}</span>
                  </Link>
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
