import Container from "../Layout/Container/Container";
import Dashboard from "../components/Dashboard/Dashboard";
import BarChart from "./Bar/BarChart";
import Customers from "./Customers/Customers";
import Invoices from "./Invoices/Invoices";
import Manage from "./Manage/Manage";

export const routes = [
  {
    path: "/",
    element: (
      <Container>
        <Dashboard />
      </Container>
    ),
  },

  // Data
  {
    path: "/manage",
    element: (
      <Container>
        <Manage />
      </Container>
    ),
  },
  {
    path: "/customers",
    element: (
      <Container>
        <Customers />
      </Container>
    ),
  },
  {
    path: "/invoices",
    element: (
      <Container>
        <Invoices />
      </Container>
    ),
  },
  {
    path: "/bar",
    element: (
      <Container>
        <BarChart />
      </Container>
    ),
  },
];
