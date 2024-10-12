import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Import the login component
import MainContent from './MainContent'; // Import the new main content component
import { ThemeContext } from './ThemeContext'; // Import the ThemeContext
import Dashboard from './Dashboard'; // Import the Dashboard component
import About from './About'; // Import the About component

function App() {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext); // Use context to access theme state

  return (
    <Router>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}> {/* Apply the theme class */}
        <button onClick={toggleTheme} style={{ position: 'fixed', top: '10px', right: '10px' }}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Default route to Login */}
          <Route path="/*" element={<MainContent />} /> {/* All other routes go to MainContent */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
