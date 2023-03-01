import styles from "./Sidebar.module.scss";
import { links } from "../../data/links";

function Sidebar() {
  const linksElement = links.map((link, i) => {
    return (
      <div className={styles.sidebar__item} key={i}>
        {/* Render title only if it has a title */}
        {link.title.length > 1 && <h3>{link.title}</h3>}

        {/* Render each link to an a element */}
        <div className={styles.sidebar__item__links}>
          {link.links.map((linkItems, i) => {
            return (
              <a href="/" key={i}>
                {linkItems.icon} <span>{linkItems.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className={styles.sidebar}>
      <h2>Admin</h2>
      <div className={styles.sidebar__container}>{linksElement}</div>
    </div>
  );
}

export default Sidebar;
