import React from "react";
import styles from "./Area.module.scss";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import DashAreaChart from "../../components/Dashboard/DashAreaChart/DashAreaChart";

function Area() {
  return (
    <div className={styles.area_chart}>
      <PageHeader title="Area" content="Chart" />
      <DashAreaChart />
    </div>
  );
}

export default Area;
