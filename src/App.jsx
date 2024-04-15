import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserPage from './pages/UserPage';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Content from './components/Content';
import Mojito from './Imagens/Mojito.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <img src={Mojito} alt="Mojito" style={{ width: '300px' }} />
          <h2>Destaque do Dia</h2>
          <p>Aqui está o cocktail do dia: Mojito!</p>
        </div>
        <Sidebar />
        <Content />
        <Routes>
          <Route path="/" element={<h1>Cocktails</h1>} />
          <Route path="/users" element={<UserPage />} />
          <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

