// NotificationSettings.js

import React from 'react';
import Navbar from '../Dashboard/Navbar';
import './NotificationSettings.css';

function NotificationSettings() {
  return (
    <div>
      <Navbar />
      <div className="notification-settings-container">
        <h1>Notification Settings</h1>
        <form>
          <label>Email Notifications:
            <input type="checkbox" name="emailNotifications" />
          </label>
          <br />
          <label>SMS Notifications:
            <input type="checkbox" name="smsNotifications" />
          </label>
          <br />
          <button type="submit">Save Settings</button>
        </form>
      </div>
    </div>
  );
}

export default NotificationSettings;
