import { Color } from "@tremor/react";
import {
  HiShoppingBag,
  HiDesktopComputer,
  HiBriefcase,
  HiShieldExclamation,
} from "react-icons/hi";

type TransactionCategory = {
  name: string;
  icon: any;
  color: Color;
  numTransactions: number;
  amount: string;
};

const march: TransactionCategory[] = [
  {
    name: "Groceries",
    icon: HiShoppingBag,
    color: "sky",
    numTransactions: 24,
    amount: "$ 230",
  },
  {
    name: "IT & Office",
    icon: HiDesktopComputer,
    color: "orange",
    numTransactions: 4,
    amount: "$ 990",
  },
  {
    name: "Travel",
    icon: HiBriefcase,
    color: "pink",
    numTransactions: 11,
    amount: "$ 2,345",
  },
  {
    name: "Insurance",
    icon: HiShieldExclamation,
    color: "emerald",
    numTransactions: 2,
    amount: "$ 1,450",
  },
];

export const DataTransactionMonths = [
  {
    name: "March 2022",
    data: march,
  },
];
