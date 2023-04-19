import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./components/Admin-MainLayout";
import { Dashboard } from "./pages/Admin-Dashboard";
import Orders from "./pages/Orders-Admin";
import Customers from "./pages/Customers-Admin";
import Sellers from "./pages/Sellers-Admin";
import Settings from "./pages/Settings-Admin";
import CustomerDashboard from "./pages/customerDashboard";
import Home from "./pages/home";
import Product from "./pages/SellerDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes files*/}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/vendors" element={<Sellers />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>

      {/* Set your route files here */}
      <Routes>
        <Route path="/profile" element={<CustomerDashboard />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/seller-dashboard" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
