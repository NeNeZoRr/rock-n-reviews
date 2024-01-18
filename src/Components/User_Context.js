// User_Context.js

import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    try {
      // Simulate a server check for authentication
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        console.error('Authentication failed:', response.status, response.statusText);
        return;
      }
  
      // If authentication is successful, update the user state
      const userFromServer = { username: userData.username };
      console.log('User logged in:', userFromServer);
      setUser(userFromServer);
    } catch (error) {
      console.error('Error logging in', error);
    }
  };
  

  const logout = () => {
    console.log('Logout function called'); 
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };






