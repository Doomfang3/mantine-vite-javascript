import {Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const API_URL = 'http://localhost:4000'

const UserPage = () => {
    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () => {
        try {
            const response = await fetch('${API_URL}/ users');
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
                <Link key={user.id} to={`/users/${user.id}`}>
                    <p>Name: {user.firstname}</p>
                </Link>
            ))}
        </>
    );
};

export default UserPage;
