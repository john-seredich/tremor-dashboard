import KPICards from "../KPICards/KPICards";
import PageHeader from "../PageHeader/PageHeader";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <PageHeader title="Dashboard" content="Welcome to your dashboard!" />
      <KPICards />
    </div>
  );
}

export default Dashboard;
