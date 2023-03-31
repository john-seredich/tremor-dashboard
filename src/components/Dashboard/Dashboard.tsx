import KPICards from "../KPICards/KPICards";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <KPICards />
    </div>
  );
}

export default Dashboard;
