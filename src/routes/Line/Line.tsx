import React, { useState } from "react";
import styles from "./Line.module.scss";
import {
  Card,
  Title,
  Text,
  LineChart,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import { lineData } from "./lineData";
import PageHeader from "../../Layout/PageHeader/PageHeader";

const valueFormatterRelative = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

const valueFormatterAbsolute = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

function Line() {
  const [setlectedValue, setSelectedValue] = useState("relative");

  return (
    <div className={styles.line_chart}>
      <PageHeader title="Line" content="Chart" />
      <Card decoration="top" decorationColor="blue">
        <div className={styles.line_chart__header}>
          <div>
            <Title>Churn Rate</Title>
            <Text>Lost customers per day</Text>
          </div>
          <div className={styles.line_chart__toggle}>
            <Toggle
              color="zinc"
              defaultValue="relative"
              onValueChange={(value) => setSelectedValue(value)}
            >
              <ToggleItem value="relative" text="Relative" />
              <ToggleItem value="absolute" text="Absolute" />
            </Toggle>
          </div>
        </div>
        <LineChart
          marginTop="mt-8"
          height="h-80"
          data={
            setlectedValue === "absolute"
              ? lineData.absolute
              : lineData.relative
          }
          dataKey="Date"
          categories={["Customer Churn"]}
          colors={["blue"]}
          showLegend={false}
          valueFormatter={
            setlectedValue === "absolute"
              ? valueFormatterAbsolute
              : valueFormatterRelative
          }
        />
      </Card>
    </div>
  );
}

export default Line;
