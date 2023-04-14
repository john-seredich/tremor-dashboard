import "@tremor/react/dist/esm/tremor.css";
import styles from "./App.module.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Container from "./Layout/Container/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
