import { Card, AreaChart, Title, Text } from "@tremor/react";
import { DashAreaChartData } from "./DashAreaChart.data";

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

function DashAreaChart() {
  return (
    <div>
      <Card decoration="top" decorationColor="blue" maxWidth="max-w-full">
        <Title color="blue">Performance</Title>
        <Text>Comparison between Sales and Profit</Text>
        <AreaChart
          marginTop="mt-4"
          data={DashAreaChartData}
          categories={["Sales", "Profit"]}
          dataKey="Month"
          colors={["indigo", "fuchsia"]}
          valueFormatter={valueFormatter}
        />
      </Card>
    </div>
  );
}

export default DashAreaChart;
