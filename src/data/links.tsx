import {
  BsPeopleFill,
  BsPersonFill,
  BsFillCalendarFill,
  BsQuestionCircleFill,
  BsFillBarChartFill,
  BsPieChartFill,
  BsHouseFill,
} from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";

export const links = [
  {
    title: "",
    links: [
      {
        name: "Dashboard",
        icon: <BsHouseFill />,
      },
    ],
  },

  {
    title: "DATA",
    links: [
      {
        name: "Manage team",
        icon: <BsPeopleFill />,
      },
      {
        name: "Contact",
        icon: <MdPermContactCalendar />,
      },
      {
        name: "Invoices Balances",
        icon: <FaFileInvoice />,
      },
    ],
  },
  {
    title: "PAGES",
    links: [
      {
        name: "Profile Form",
        icon: <BsPersonFill />,
      },
      {
        name: "Caldendar",
        icon: <BsFillCalendarFill />,
      },
      {
        name: "FAQ Page",
        icon: <BsQuestionCircleFill />,
      },
    ],
  },
  {
    title: "CHARTS",
    links: [
      {
        name: "Bar Chart",
        icon: <BsFillBarChartFill />,
      },
      {
        name: "Pie Chart",
        icon: <BsPieChartFill />,
      },

      {
        name: "Line Chart",
        icon: <AiOutlineRise />,
      },
    ],
  },
];
