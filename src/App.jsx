import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import UserPage from './pages/UserPage';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Content from './components/Content';
import Mojito  from './Imagens/Mojito.png';
 import './App.css'


function App() {
  return (
   <>
       <div className= "App">
         <Navbar/>
         <div className= "container" style={{ color: 'white' }}>
          <img src={Mojito} alt="Mojito" style={{width: '300px'}} />
           <h2>Destaque do Dia</h2>
           <p>Aqui está o cocktail do dia: Mojito!</p>
          </div>
         <Sidebar/>
         <Content>

         </Content>
         <Routes>
           <Route path={"/"} element={<hi>Cocktails</hi>} />
           <Route path={"/users"} element={UserPage} />
           <Route path={"*"} element={<h1>404 Page</h1 >} />
         </Routes>
         <Footer></Footer>
        </div>
    </>
  
  );
  }
export default App
