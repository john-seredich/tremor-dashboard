import KPICards from "../KPICards/KPICards";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <PageHeader title="Dashboard" content="Welcome to your dashboard!" />
      <div className={styles.dashboard__container}>
        <KPICards />
      </div>
    </div>
  );
}

export default Dashboard;
