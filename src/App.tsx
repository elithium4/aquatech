import { Link, Route, Routes } from "react-router-dom";
import { Landing } from "./Landing/Landing";
import { Products } from "./Products/Products";
import { Policy } from "./Policy/Policy";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <Link to="/" className={styles.logoName}>AquaTech</Link>
        <div className={styles.subheader}>погружение в будущее</div>
      </header>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/catalog" Component={Products} />
        <Route path="/policy" Component={Policy} />
      </Routes>
    </div>
  );
}

export default App;
