import { routes } from "./config";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import { Navbar } from "./components";

function App() {
  return (
    <div id="main-container">
      {/* Navbar */}
      <Navbar />

      <div className="pages">
        <Routes>
          {routes.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
