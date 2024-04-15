import {Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const UserPage = () => {
    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () => {
        try {
            const response = await fetch('https://your-api-url/users');
            if (response.ok) {
                const userData = await response.json();
                setUsers(userData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <>
            <h1>All Users</h1>
            {users.map(user => (
                <Link key={user.id} to={`/user/${user.id}`}>
                    <p>Name: {user.name}</p>
                </Link>
            ))}
        </>
    );
};

export default UserPage;
