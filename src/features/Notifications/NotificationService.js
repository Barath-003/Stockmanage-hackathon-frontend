// NotificationService.js

import React from 'react';
import Navbar from '../Dashboard/Navbar';
import './NotificationService.css';

function NotificationService() {
  return (
    <div>
      <Navbar />
      <div className="notification-service-container">
        <h1>Notification Service</h1>
        <p>Service Status: Active</p>
        <p>Last Notification Sent: 2023-12-01 14:30</p>
        <button>Test Notification</button>
      </div>
    </div>
  );
}

export default NotificationService;
