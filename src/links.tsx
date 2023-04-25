import {
  BsPeopleFill,
  BsPersonFill,
  BsFillCalendarFill,
  BsQuestionCircleFill,
  BsFillBarChartFill,
  BsPieChartFill,
  BsHouseFill,
  BsFillChatFill,
} from "react-icons/bs";
import {
  MdPermContactCalendar,
  MdEmail,
  MdOutlineLogout,
} from "react-icons/md";
import { FaFileInvoice, FaMoneyBill } from "react-icons/fa";
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
    title: "PAGES",
    links: [
      {
        name: "Profile Form",
        route: "/profile",
        icon: <BsPersonFill />,
      },
      {
        name: "Caldendar",
        route: "/calendar",
        icon: <BsFillCalendarFill />,
      },
      {
        name: "FAQ Page",
        route: "/faq",
        icon: <BsQuestionCircleFill />,
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
        name: "Pie Chart",
        route: "/pie",
        icon: <BsPieChartFill />,
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
