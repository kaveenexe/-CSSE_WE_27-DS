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
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        Admin
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>

      {/* Import your route files here */}
      <Routes>
        <Route path="/profile" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
