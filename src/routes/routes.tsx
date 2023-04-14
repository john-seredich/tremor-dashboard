import Container from "../Layout/Container/Container";
import Dashboard from "../components/Dashboard/Dashboard";
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
    path: "/calendar",
    element: (
      <Container>
        <h1>Calendar</h1>
      </Container>
    ),
  },
  {
    path: "/invoices",
    element: (
      <Container>
        <h1>Invocies</h1>
      </Container>
    ),
  },
];
