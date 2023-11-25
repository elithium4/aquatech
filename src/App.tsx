import { Route, Routes } from "react-router-dom";
import { Landing } from "./Landing/Landing";
import { Catalog } from "./Catalog/Catalog";
import { Policy } from "./Policy/Policy";

function App() {
  return <>
  <Routes>
    <Route path="/" Component={Landing}/>
    <Route path="/catalog" Component={Catalog}/>
    <Route path="/policy" Component={Policy}/>
  </Routes>
  </>
}

export default App;
