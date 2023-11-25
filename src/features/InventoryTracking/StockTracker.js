// StockTracker.js

import React from 'react';
import Navbar from '../Dashboard/Navbar';
import './StockTracker.css';

function StockTracker() {
  return (
    <div>
      <Navbar />
      <div className="stock-tracker-container">
        <h1>Stock Tracker</h1>
        <div className="stock-info">
          <p>Current Stock: 500 units</p>
          <p>Out of Stock: 20 items</p>
          <p>Low Stock: 50 items</p>
        </div>
      </div>
    </div>
  );
}

export default StockTracker;
