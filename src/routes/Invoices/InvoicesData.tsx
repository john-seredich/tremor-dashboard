import { Color } from "@tremor/react";
import avatar1 from "../../assets/avatar.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import avatar5 from "../../assets/avatar5.jpg";
import avatar6 from "../../assets/avatar6.jpg";
import avatar7 from "../../assets/avatar7.jpg";

export const invoiceColors: { [key: string]: Color } = {
  "Ready for dispatch": "amber",
  Cancelled: "rose",
  Shipped: "emerald",
};

export const invoiceTransactions = [
  {
    transactionID: "#123456",
    user: "Lena Mayer",
    image: avatar1,
    item: "Under Armour Shorts",
    status: "Ready for dispatch",
    amount: "$ 49.90",
    link: "#",
  },
  {
    transactionID: "#234567",
    user: "Max Smith",
    image: avatar2,
    item: "Book - Wealth of Nations",
    status: "Ready for dispatch",
    amount: "$ 19.90",
    link: "#",
  },
  {
    transactionID: "#345678",
    user: "Anna Stone",
    image: avatar3,
    item: "Garmin Forerunner 945",
    status: "Cancelled",
    amount: "$ 499.90",
    link: "#",
  },
  {
    transactionID: "#4567890",
    user: "Truls Cumbersome",
    image: avatar4,
    item: "Running Backpack",
    status: "Shipped",
    amount: "$ 89.90",
    link: "#",
  },
  {
    transactionID: "#5678901",
    user: "Peter Pikser",
    image: avatar5,
    item: "Rolex Submariner Replica",
    status: "Cancelled",
    amount: "$ 299.90",
    link: "#",
  },
  {
    transactionID: "#6789012",
    user: "Phlipp Forest",
    image: avatar6,
    item: "On Clouds Shoes",
    status: "Ready for dispatch",
    amount: "$ 290.90",
    link: "#",
  },
  {
    transactionID: "#78901234",
    user: "Mara Pacemaker",
    image: avatar7,
    item: "Ortovox Backpack 40l",
    status: "Shipped",
    amount: "$ 150.00",
    link: "#",
  },
  {
    transactionID: "#89012345",
    user: "Sev Major",
    image: avatar1,
    item: "Oakley Jawbreaker",
    status: "Ready for dispatch",
    amount: "$ 190.90",
    link: "#",
  },
];
