import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './features/Dashboard/Dashboard';
import ProductList from './features/ProductManagement/ProductList';
import ProductForm from './features/ProductManagement/ProductForm';
import StockTracker from './features/InventoryTracking/StockTracker';
import StockAlerts from './features/InventoryTracking/StockAlerts';
import ProductSearch from './features/SearchFilters/ProductSearch';
import ProductFilters from './features/SearchFilters/ProductFilters';
import StockReport from './features/Reporting/StockReport';
import SalesReport from './features/Reporting/SalesReport';
import TrendsChart from './features/Reporting/TrendsChart';
import NotificationSettings from './features/Notifications/NotificationSettings';
import UserRoles from './features/UserRolesPermissions/UserRoles';
import Permissions from './features/UserRolesPermissions/Permissions';
import Navbar from './features/Dashboard/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<ProductForm />} />
        <Route path="/products/edit/:id" element={<ProductForm />} />
        <Route path="/stock" element={<StockTracker />} />
        <Route path="/stock/alerts" element={<StockAlerts />} />
        <Route path="/search" element={<ProductSearch />} />
        <Route path="/filters" element={<ProductFilters />} />
        <Route path="/reports/stock" element={<StockReport />} />
        <Route path="/reports/sales" element={<SalesReport />} />
        <Route path="/reports/trends" element={<TrendsChart />} />
        <Route path="/notifications/settings" element={<NotificationSettings />} />
        <Route path="/user/roles" element={<UserRoles />} />
        <Route path="/user/permissions" element={<Permissions />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
