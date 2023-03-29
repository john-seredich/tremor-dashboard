import React, { useState } from "react";
import {
  BadgeDelta,
  Button,
  Card,
  DonutChart,
  Flex,
  Toggle,
  ToggleItem,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";

import {
  HiOutlineViewList,
  HiOutlineChartPie,
  HiArrowNarrowRight,
} from "react-icons/hi";

import { stocks } from "./OverviewBlockData";

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

function OverviewBlock() {
  const [selectedView, setSelectedView] = useState("chart");

  return (
    <div>
      <Card maxWidth="max-w-md" decoration="top" decorationColor="blue">
        <Flex
          spaceX="space-x-8"
          justifyContent="justify-between"
          alignItems="items-center"
        >
          <Title>Overview</Title>
          <Toggle
            defaultValue="chart"
            color="gray"
            onValueChange={(value) => setSelectedView(value)}
          >
            <ToggleItem value="chart" icon={HiOutlineChartPie} />
            <ToggleItem value="list" icon={HiOutlineViewList} />
          </Toggle>
        </Flex>
        <Text marginTop="mt-8">Portfolio value</Text>
        <Metric>$ 25,465</Metric>
        <Divider />
        <Text marginTop="mt-8">
          <Bold>Asset Allocation</Bold>
        </Text>
        <Text>1 Asset class • 5 Holdings</Text>
        {selectedView === "chart" ? (
          <DonutChart
            data={stocks}
            showAnimation={false}
            category="value"
            valueFormatter={valueFormatter}
            marginTop="mt-6"
          />
        ) : (
          <>
            <Flex marginTop="mt-8" justifyContent="justify-between">
              <Text truncate={true}>
                <Bold>Stocks</Bold>
              </Text>
              <Text>Since transaction</Text>
            </Flex>
            <List marginTop="mt-4">
              {stocks.map((stock) => (
                <ListItem key={stock.name}>
                  <Text>{stock.name}</Text>
                  <Flex justifyContent="justify-end" spaceX="space-x-2">
                    <Text>
                      $ {Intl.NumberFormat("us").format(stock.value).toString()}
                    </Text>
                    <BadgeDelta
                      deltaType={stock.deltaType}
                      size="xs"
                      text={stock.performance}
                    />
                  </Flex>
                </ListItem>
              ))}
            </List>
          </>
        )}
        <Flex marginTop="mt-6">
          <Button
            size="xs"
            variant="light"
            icon={HiArrowNarrowRight}
            iconPosition="right"
          >
            View more
          </Button>
        </Flex>
      </Card>
    </div>
  );
}

export default OverviewBlock;
