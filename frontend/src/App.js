import "./App.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import MainLayout from "./components/MainLayout";
import {Dashboard} from "./pages/Dashboard";
import Customers from "./pages/Customers"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
