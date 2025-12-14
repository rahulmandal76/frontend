import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import TurnScheduling from "./pages/TurnScheduling.jsx";
import FindScheme from "./pages/FindScheme.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Climate from "./pages/Climate.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/turn-scheduling" element={<TurnScheduling />} />
      <Route path="/find-scheme" element={<FindScheme />} />
      <Route path="/analytical-dashboard" element={<Dashboard />} />
      <Route path="/climate-prediction" element={<Climate />} />
    </Routes>
  );
}

export default App;
