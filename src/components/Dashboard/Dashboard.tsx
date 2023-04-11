import KPICards from "../KPICards/KPICards";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import styles from "./Dashboard.module.scss";
import DashAreaChart from "./DashAreaChart/DashAreaChart";
import DashTransaction from "./DashTransaction/DashTransaction";
import { ColGrid } from "@tremor/react";
import DashSocialBar from "./DashSocialBar/DashSocialBar";
import DashBarChart from "./DashBarChart/DashBarChart";
import DashSchedule from "./DashSchedule/DashSchedule";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <PageHeader title="Dashboard" content="Welcome to your dashboard!" />
      <div className={styles.dashboard__container}>
        <ColGrid numColsSm={1} numColsLg={1} gapX="gap-x-6" gapY="gap-y-6">
          <KPICards />
          <ColGrid
            numColsSm={1}
            numColsMd={2}
            numColsLg={3}
            gapX="gap-x-4"
            gapY="gap-y-6"
          >
            <DashAreaChart />
            <DashTransaction />
            <DashSocialBar />
          </ColGrid>
          <ColGrid
            numColsSm={1}
            numColsMd={2}
            numColsLg={2}
            gapX="gap-x-4"
            gapY="gap-y-6"
          >
            <DashBarChart />
            <DashSchedule />
          </ColGrid>
        </ColGrid>
      </div>
    </div>
  );
}

export default Dashboard;
