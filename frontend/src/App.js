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
import BeautyProducts from "./pages/Catagories/HerbalBeautyProducts";
import Other from "./pages/Catagories/Other";
import HerbalProducts from "./pages/Catagories/HerbalHairProducts";
import Tracking from "./pages/tracking";

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
        <Route path="/herbal-beauty-products" element={<BeautyProducts />} />
        <Route path="/other" element={<Other />} />
        <Route path="/herbal-hair-products" element={<HerbalProducts />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </Router>
  );
}

export default App;
