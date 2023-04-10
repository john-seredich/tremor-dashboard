import { JSXElementConstructor, useEffect, useState } from "react";
import {
  Title,
  Text,
  Card,
  Flex,
  Dropdown,
  DropdownItem,
  Bold,
  BarList,
} from "@tremor/react";

import { visitCategories, visitsData, IVisitsData } from "./DashSocialBarData";

function DashSocialBar() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredData, setFilteredData] = useState(visitsData);

  const filterByCategory = (category: string, data: IVisitsData[]) =>
    category === "all"
      ? data
      : data.filter((item) => item.category === category);

  useEffect(() => {
    setFilteredData(filterByCategory(selectedCategory, visitsData));
  }, [selectedCategory]);

  return (
    <Card maxWidth="max-w-xl" decoration="top" decorationColor="blue">
      <Flex spaceX="space-x-8">
        <Title>Sources</Title>
        <Dropdown
          onValueChange={(value: any) => setSelectedCategory(value)}
          placeholder="Source Selection"
          maxWidth="max-w-xs"
        >
          {visitCategories.map((category) => (
            <DropdownItem
              key={category.key}
              value={category.key}
              text={category.name}
            />
          ))}
        </Dropdown>
      </Flex>
      <Flex marginTop="mt-8">
        <Text>
          <Bold>Source</Bold>
        </Text>
        <Text>
          <Bold>Visits</Bold>
        </Text>
      </Flex>
      <BarList data={filteredData} showAnimation={false} marginTop="mt-4" />
    </Card>
  );
}

export default DashSocialBar;
