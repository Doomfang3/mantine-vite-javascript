import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Content from './components/Content';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Cocktails from './pages/AllCocktails'
import FavoriteList from './pages/FavoriteList';
import NewCocktail from './pages/AddCocktail'

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
          <Route path="/" element={<h1>Cocktails of the Day</h1>} />
          <Route path='/cocktails' element={<Cocktails/>} />
          <Route path='/favorites' element={<FavoriteList/>} />
          <Route path='/addcocktail' element={<NewCocktail/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>
        <Footer />
      </div>
   
   
  );
}

export default App;

