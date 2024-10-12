// src/Settings.jsx
import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { FaSun, FaMoon, FaLanguage, FaBell } from 'react-icons/fa'; // Import icons
import './Settings.css';

const Settings = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  // State to manage language and notifications
  const [language, setLanguage] = useState('English');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Handle notification toggle
  const handleNotificationToggle = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  // Handle save changes
  const handleSaveChanges = () => {
    alert('Settings saved!'); // Replace with actual save logic
  };

  return (
    <div className={`settings-page ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className="settings-title">Settings</h1>
      
      <div className="theme-toggle">
        <h2 className="toggle-title">
          <FaMoon className="icon" /> Theme
        </h2>
        <button className="toggle-button" onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode <FaSun className="icon" />
        </button>
      </div>
      
      <div className="language-selection">
        <h2 className="toggle-title">
          <FaLanguage className="icon" /> Language
        </h2>
        <select value={language} onChange={handleLanguageChange} className="language-select">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>

      <div className="notification-settings">
        <h2 className="toggle-title">
          <FaBell className="icon" /> Notifications
        </h2>
        <label className="notification-toggle">
          <span className={`switch ${notificationsEnabled ? 'on' : 'off'}`}>
            <input 
              type="checkbox" 
              checked={notificationsEnabled} 
              onChange={handleNotificationToggle} 
              className="switch-input"
            />
            <span className="slider"></span>
          </span>
          {notificationsEnabled ? 'Enabled' : 'Disabled'}
        </label>
      </div>

      <button className="save-button" onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
