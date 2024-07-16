import { routes } from "./config";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import { LoadingPage, Navbar } from "./components";
import { ProjectContext } from "./context";
import { useState } from "react";

function App() {
  const [openLoading, setOpenLoading] = useState(false);
  return (
    <ProjectContext.Provider value={{ openLoading, setOpenLoading }}>
      <div id="main-container">
        {/* Loading */}
        <LoadingPage />
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
    </ProjectContext.Provider>
  );
}

export default App;
