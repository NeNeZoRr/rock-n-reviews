import React, { createContext, useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [userName, setUserName] = useState('');
    const { _id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${_id}`);
                if (!response.ok) {
                    console.error('Error fetching user data:', response.status, response.statusText);
                    return;
                }

                const userData = await response.json();
                setUser(userData);
                setUserName(userData.userName);
                console.log('Fetched user data:', userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, [_id]);

    const login = async (userData) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
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

            const userFromServer = { userName: userData.userName };
            console.log('User logged in:', userFromServer);
            setUser(userFromServer);
            setUserName(userFromServer.userName);
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    const logout = () => {
        setUser(null);
        setUserName('');
    };

    return (
        <UserContext.Provider value={{ user, userName, login, logout, setUserName }}>
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