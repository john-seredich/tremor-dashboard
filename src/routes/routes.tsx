import Container from "../Layout/Container/Container";
import Dashboard from "../components/Dashboard/Dashboard";
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
        <h1>Customers</h1>
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
];
