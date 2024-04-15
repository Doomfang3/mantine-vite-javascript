import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserPage from './pages/UserPage';
import UserDetails from './pages/UserDetails'; 
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Content from './components/Content';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';

import './App.css';

function App() {
  return (
  
      <div className="App">
        <Navbar />
        <Header>
          <div>
          <h3>Cocktails of the Day</h3>
          </div>
        </Header>
       
        <Sidebar />
        <Content />
        <Routes>
          <Route path="/" element={<h1>Cocktails</h1>} />
          <Route path="/users" element={<UserPage />} />
          <Route path='/user/:userId' element={<UserDetails />} />
          
            
          <Route path="/about" element={<AboutPage/>} />
          <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>
        <Footer />
      </div>
   
   
  );
}

export default App;

