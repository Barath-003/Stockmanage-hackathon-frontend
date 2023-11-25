// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/search">Search</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/notifications">Notifications</Link>
    </nav>
  );
}

export default Navbar;
