import styles from "./BarChart.module.scss";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import DashBarChart from "../../components/Dashboard/DashBarChart/DashBarChart";

function BarChart() {
  return (
    <div className={styles.bar_chart}>
      <PageHeader title="Bar Chart" content="Chart" />
      <DashBarChart />
    </div>
  );
}

export default BarChart;
