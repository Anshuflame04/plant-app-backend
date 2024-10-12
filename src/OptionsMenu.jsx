import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig'; // Firebase auth import
import './OptionsMenu.css'; // Add CSS styles for your options menu

const OptionsMenu = ({ toggleOptions }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate();

  // Check if the user is logged in using Firebase
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    // Cleanup subscription on component unmount
    return unsubscribe;
  }, []);

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent default navigation

    if (isLoggedIn) {
      alert('You are already logged in.');
    } else {
      toggleOptions();
      navigate('/login');
    }
  };

  const handleLogoutClick = async (e) => {
    e.preventDefault(); // Prevent default navigation

    const confirmLogout = window.confirm('Do you really want to log out?'); // Ask for confirmation

    if (confirmLogout) {
      try {
        await auth.signOut(); // Sign out the user
        setIsLoggedIn(false);
        alert('You have successfully logged out.');
        toggleOptions();
        navigate('/login'); // Navigate back to login after logout
      } catch (error) {
        console.error('Logout error:', error.message);
        alert('Error logging out.');
      }
    } else {
      alert('Logout cancelled.');
    }
  };

  return (
    <div className="options-menu" onClick={(e) => e.stopPropagation()}>
      <ul>
        <li onClick={handleLoginClick}>
          <Link to="/login">Login</Link>
        </li>
        <li onClick={toggleOptions}>
          <Link to="/settings">Settings</Link>
        </li>
        <li onClick={toggleOptions}>
          <Link to="/profile">Profile</Link>
        </li>
        <li onClick={toggleOptions}>
          <Link to="/history">History</Link>
        </li>
        <li onClick={toggleOptions}>
          <Link to="/about">About Us</Link> {/* About Link */}
        </li>
        {isLoggedIn && (
          <li onClick={handleLogoutClick}>
            <Link to="/logout">Logout</Link> {/* Logout Link */}
          </li>
        )}
      </ul>
    </div>
  );
};

export default OptionsMenu;
