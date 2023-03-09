import { DeltaType } from "@tremor/react";

type kpiDataType = {
  title: string;
  metric: string;
  metricPrev: string;
  delta: string;
  deltaType: DeltaType;
};

export const kpiData: kpiDataType[] = [
  {
    title: "Sales",
    metric: "$ 12,699",
    metricPrev: "$ 9,456",
    delta: "10.9%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Profit",
    metric: "$ 32,531",
    metricPrev: "$35,738",
    delta: "10.9%",
    deltaType: "moderateDecrease",
  },
  {
    title: "Customers",
    metric: "18,799",
    metricPrev: " 16,329",
    delta: "10.9%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Ratings",
    metric: "13,421",
    metricPrev: " 9,412",
    delta: "32.9%",
    deltaType: "moderateIncrease",
  },
];
