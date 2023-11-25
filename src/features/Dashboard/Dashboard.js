// src/features/Dashboard/Dashboard.js

import React from 'react';
import Navbar from './Navbar';
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        
        <div className="content-section">
          <h2>Stock Summaries</h2>
          <p>Stock ABC: 100 units</p>
          <p>Stock XYZ: 75 units</p>
        </div>

        <div className="content-section">
          <h2>Alerts</h2>
          <p>Low stock alert for Stock XYZ!</p>
        </div>

        <div className="content-section">
          <h2>Trends</h2>
          <p>Overall sales are increasing.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
