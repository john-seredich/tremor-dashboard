import { DeltaType, Color } from "@tremor/react";
import { HiCash, HiTicket, HiUserGroup, HiShoppingBag } from "react-icons/hi";
import { IconType } from "react-icons";

type categories = {
  title: string;
  metric: string;
  metricPrev: string;
  delta: string;
  deltaType: DeltaType;
  color: Color;
  icon: IconType;
};

export const KPIColors: { [key: string]: Color } = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

export const KPICardData: categories[] = [
  {
    title: "Sales",
    metric: "$ 12,699",
    metricPrev: "$ 9,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
    color: "blue",
    icon: HiTicket,
  },
  {
    title: "Profit",
    metric: "$ 40,598",
    metricPrev: "$ 45,564",
    delta: "10.9%",
    deltaType: "moderateDecrease",
    color: "blue",
    icon: HiCash,
  },
  {
    title: "Customers",
    metric: "1,072",
    metricPrev: "856",
    delta: "25.3%",
    deltaType: "moderateIncrease",
    color: "blue",
    icon: HiUserGroup,
  },
  {
    title: "Product",
    metric: "3,461",
    metricPrev: "3,461",
    delta: "0.00%",
    deltaType: "unchanged",
    color: "blue",
    icon: HiShoppingBag,
  },
];

// export const KPICardData: categories[] = [
//   {
//     title: "Sales",
//     metric: "$ 12,699",
//     metricPrev: "$ 9,456",
//     delta: "34.3%",
//     deltaType: "moderateIncrease",
//     color: "indigo",
//     icon: HiTicket,
//   },
//   {
//     title: "Profit",
//     metric: "$ 40,598",
//     metricPrev: "$ 45,564",
//     delta: "10.9%",
//     deltaType: "moderateDecrease",
//     color: "amber",
//     icon: HiCash,
//   },
//   {
//     title: "Customers",
//     metric: "1,072",
//     metricPrev: "856",
//     delta: "25.3%",
//     deltaType: "moderateIncrease",
//     color: "teal",
//     icon: HiUserGroup,
//   },
//   {
//     title: "Product",
//     metric: "3,461",
//     metricPrev: "3,461",
//     delta: "0.00%",
//     deltaType: "unchanged",
//     color: "rose",
//     icon: HiShoppingBag,
//   },
// ];
