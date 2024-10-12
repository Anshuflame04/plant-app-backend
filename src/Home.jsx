import React, { useState, useEffect } from 'react';
import { auth, db } from './firebaseConfig'; // Import Firebase auth and Firestore
import './Home.css'; // Import the CSS file for styles
import AnshuBody from './assets/AnshuBody.jpg'; // Adjust the path as necessary
import { doc, getDoc } from 'firebase/firestore'; // Firestore for user details

const Home = () => {
  const [userName, setUserName] = useState(''); // State to store user's name

  // Fetch the user's details from Firebase Firestore
  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser; // Get current authenticated user

      if (user) {
        const userDocRef = doc(db, 'users', user.uid); // Reference to the Firestore document
        const userSnapshot = await getDoc(userDocRef); // Fetch user details

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setUserName(userData.name); // Set the user's name
        }
      }
    };

    fetchUserName();
  }, []);

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={AnshuBody} alt="Plant Disease Detection" className="centered-image" />
      </div>
      <p className="welcome-text">Welcome, {userName.split(' ')[0]}!</p> {/* Display first name */}
      <h3>by @AnshuFlame</h3> 
    </div>
  );
};

export default Home;
