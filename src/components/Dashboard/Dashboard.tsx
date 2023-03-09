import KpiCards from "../KpiCards/KpiCards";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__container}>
        <KpiCards />
      </div>
    </div>
  );
}

export default Dashboard;
