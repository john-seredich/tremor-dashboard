import styles from "./Bar.module.scss";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import DashBarChart from "../../components/Dashboard/DashBarChart/DashBarChart";

function Bar() {
  return (
    <div className={styles.bar_chart}>
      <PageHeader title="Bar" content="Chart" />
      <DashBarChart />
    </div>
  );
}

export default Bar;
