import styles from "./Sidebar.module.scss";
import { links } from "../../data/links";
import { AiOutlineMenu } from "react-icons/ai";

function Sidebar() {
  const activeItem = "Dashboard";

  const linksElement = links.map((link, i) => {
    return (
      <div className={styles.sidebar__item} key={i}>
        {/* Render title only if it has a title */}
        {link.title.length > 1 && <h3>{link.title}</h3>}

        {/* Render each link to an a element */}
        <div className={styles.sidebar__item__links}>
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
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <h2>BITUMEN</h2>
        <button type="button">
          <AiOutlineMenu />
        </button>
      </div>
      <div className={styles.sidebar__container}>{linksElement}</div>
    </div>
  );
}

export default Sidebar;
