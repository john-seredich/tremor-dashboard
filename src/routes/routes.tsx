import Container from "../Layout/Container/Container";
import Dashboard from "../components/Dashboard/Dashboard";
import Area from "./Area/Area";
import Bar from "./Bar/Bar";
import Customers from "./Customers/Customers";
import Invoices from "./Invoices/Invoices";
import Line from "./Line/Line";
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

  // Charts
  {
    path: "/bar",
    element: (
      <Container>
        <Bar />
      </Container>
    ),
  },
  {
    path: "/area",
    element: (
      <Container>
        <Area />
      </Container>
    ),
  },
  {
    path: "/line",
    element: (
      <Container>
        <Line />
      </Container>
    ),
  },
];
