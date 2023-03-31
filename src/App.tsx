import "@tremor/react/dist/esm/tremor.css";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Container from "./components/Container/Container";

function App() {
  return (
    <div className={styles.app}>
      <Container>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
