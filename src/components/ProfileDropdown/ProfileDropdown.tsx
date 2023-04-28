import styles from "./ProfileDropdown.module.scss";
import profileImg from "../../assets/avatar.jpg";
import { profileLinks } from "../../links";

function ProfileDropdown() {
  return (
    <div className={styles.profile_dropdown}>
      <div className={styles.profile_dropdown__header}>
        <img src={profileImg} alt="" />
        <div className={styles.profile_dropdown__header__name}>
          <p>John S.</p>
          <p>Admin</p>
        </div>
      </div>
      <ul className={styles.profile_dropdown__links}>
        {profileLinks.map((link, i) => {
          return (
            <li key={link.name}>
              <a href="/">
                {link.icon}
                <span>{link.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProfileDropdown;
