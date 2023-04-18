import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./components/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import Customers from "./pages/Customers";
import CustomerDashboard from "./pages/customerDashboard";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes files*/}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
        </Route>
      </Routes>

      {/* Set your route files here */}
      <Routes>
        <Route path="/profile" element={<CustomerDashboard />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
