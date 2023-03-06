import styles from "./Notification.module.scss";
import profileImage from "../../assets/avatar.jpg";
import profileImage2 from "../../assets/avatar2.jpg";

function Notification() {
  return (
    <div className={styles.notification}>
      <div className={styles.notification__header}>
        <h2>Notification</h2>
        <p>3 New</p>
      </div>

      {/* Item 1 */}
      <div className={styles.notification__item}>
        <img src={profileImage} alt="" />
        <div className={styles.notification__item__content}>
          <p>Congratulations John!</p>
          <p>You have recieved a new follower.</p>
        </div>
        <p className={styles.notification__item_date}>Today</p>
      </div>

      {/* Item 2 */}
      <div className={styles.notification__item}>
        <img src={profileImage2} alt="" />
        <div className={styles.notification__item__content}>
          <p>Participate in a survey.</p>
          <p>As a new user please fill out this...</p>
        </div>
        <p className={styles.notification__item_date}>Yesterday</p>
      </div>
      <div className={styles.notification__read}>
        <a href="/">Read all notifications</a>
      </div>
    </div>
  );
}

export default Notification;
