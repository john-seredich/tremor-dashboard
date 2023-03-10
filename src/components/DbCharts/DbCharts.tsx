import styles from "./DbCharts.module.scss";
import {
  Flex,
  Card,
  Text,
  Metric,
  BadgeDelta,
  ColGrid,
  AreaChart,
} from "@tremor/react";
import { DbChartData, DbChartCategories } from "../../data/dbChartData";

function DbCharts() {
  const valueFormatter = (number: number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <ColGrid numColsSm={2} numColsLg={3} gapX="gap-x-6" gapY="gap-y-6">
      {DbChartCategories.map((item) => (
        <div className={styles.chart_card}>
          <Card key={item.title}>
            <Flex alignItems="items-start">
              <Text>{item.title}</Text>
              <BadgeDelta deltaType={item.deltaType} text={item.delta} />
            </Flex>
            <Flex
              justifyContent="justify-start"
              alignItems="items-baseline"
              spaceX="space-x-3"
              truncate={true}
            >
              <Metric>{item.metric}</Metric>
              <Text>from {item.metricPrev}</Text>
            </Flex>
            <AreaChart
              marginTop="mt-4"
              data={DbChartData}
              dataKey="Month"
              valueFormatter={valueFormatter}
              categories={[item.title]}
              colors={["blue"]}
              showXAxis={true}
              showGridLines={false}
              startEndOnly={true}
              showYAxis={false}
              showLegend={false}
              height="h-40"
            />
          </Card>
        </div>
      ))}
    </ColGrid>
  );
}

export default DbCharts;
