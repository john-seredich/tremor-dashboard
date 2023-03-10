import { DeltaType } from "@tremor/react";

export const DbChartData = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
    Customers: 4938,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
    Customers: 2938,
  },
  {
    Month: "Mar 21",
    Sales: 2190,
    Profit: 1900,
    Customers: 1638,
  },
  {
    Month: "Apr 21",
    Sales: 3470,
    Profit: 3908,
    Customers: 2138,
  },
  {
    Month: "May 21",
    Sales: 2170,
    Profit: 4800,
    Customers: 2142,
  },
  {
    Month: "Jun 21",
    Sales: 3170,
    Profit: 3800,
    Customers: 3142,
  },
  {
    Month: "Jul 21",
    Sales: 3490,
    Profit: 4300,
    Customers: 2345,
  },
];

export const DbChartCategories: {
  title: string;
  metric: string;
  metricPrev: string;
  delta: string;
  deltaType: DeltaType;
}[] = [
  {
    title: "Sales",
    metric: "$ 12,699",
    metricPrev: "$ 9,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Profit",
    metric: "$ 12,348",
    metricPrev: "$ 10,456",
    delta: "18.1%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Customers",
    metric: "948",
    metricPrev: "1,082",
    delta: "12.3%",
    deltaType: "moderateDecrease",
  },
];
