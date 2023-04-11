import { Card, Title, BarChart, Text } from "@tremor/react";
import { DashBarChartData } from "./DashBarChartData";

const valueFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

function DashBarChart() {
  return (
    <Card decoration="top" decorationColor="blue">
      <Title>Ticket Monitoring</Title>
      <Text>Tickets by Status</Text>
      <BarChart
        marginTop="mt-4"
        height="h-80"
        data={DashBarChartData}
        dataKey="Month"
        categories={["Completed", "In Progress", "Failed"]}
        colors={["sky", "violet", "fuchsia"]}
        valueFormatter={valueFormatter}
        stack={true}
        relative={true}
      />
    </Card>
  );
}

export default DashBarChart;
