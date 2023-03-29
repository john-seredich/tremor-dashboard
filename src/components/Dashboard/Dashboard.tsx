import HighLevelBlocks from "../HighLevelBlocks/HighLevelBlocks";
import KPICards from "../KPICards/KPICards";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <KPICards />
      <HighLevelBlocks />
    </div>
  );
}

export default Dashboard;
