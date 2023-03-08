import styles from "./Dashboard.module.scss";
import { Flex, Card, Text, Metric } from "@tremor/react";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      dashboard
      {/* <Flex>
        <Card maxWidth="max-w-xs" decoration="top" decorationColor="blue">
          <Text>Sales</Text>
          <Metric>$34,743</Metric>
        </Card>
      </Flex> */}
    </div>
  );
}

export default Dashboard;
