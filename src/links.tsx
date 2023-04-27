import {
  BsPeopleFill,
  BsPersonFill,
  BsFillCalendarFill,
  BsQuestionCircleFill,
  BsFillBarChartFill,
  BsHouseFill,
  BsFillChatFill,
} from "react-icons/bs";
import {
  MdPermContactCalendar,
  MdEmail,
  MdOutlineLogout,
} from "react-icons/md";
import { FaFileInvoice, FaMoneyBill, FaChartArea } from "react-icons/fa";
import { AiOutlineRise, AiFillSetting } from "react-icons/ai";

export const links = [
  {
    title: "",
    links: [
      {
        name: "Dashboard",
        route: "/",
        icon: <BsHouseFill />,
      },
    ],
  },

  {
    title: "DATA",
    links: [
      {
        name: "Manage team",
        route: "/manage",
        icon: <BsPeopleFill />,
      },
      {
        name: "Customers",
        route: "/customers",
        icon: <MdPermContactCalendar />,
      },
      {
        name: "Invoices Balances",
        route: "/invoices",
        icon: <FaFileInvoice />,
      },
    ],
  },
  {
    title: "CHARTS",
    links: [
      {
        name: "Bar Chart",
        route: "/bar",
        icon: <BsFillBarChartFill />,
      },
      {
        name: "Area Chart",
        route: "/area",
        icon: <FaChartArea />,
      },

      {
        name: "Line Chart",
        route: "/line",
        icon: <AiOutlineRise />,
      },
    ],
  },
];

export const profileLinks = [
  {
    name: "Profile",
    icon: <BsPersonFill />,
  },
  {
    name: "Inbox",
    icon: <MdEmail />,
  },
  {
    name: "Chat",
    icon: <BsFillChatFill />,
  },
  {
    name: "Settings",
    icon: <AiFillSetting />,
  },
  {
    name: "Pricing",
    icon: <FaMoneyBill />,
  },
  {
    name: "FAQ",
    icon: <BsQuestionCircleFill />,
  },
  {
    name: "Logout",
    icon: <MdOutlineLogout />,
  },
];
