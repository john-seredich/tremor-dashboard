import "@tremor/react/dist/esm/tremor.css";
import styles from "./App.module.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Container from "./Layout/Container/Container";

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
