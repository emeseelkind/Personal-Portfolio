// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home.jsx';
import PaintingPage from './pages/PaintingPage.jsx';
import DrawingsPage from './pages/DrawingPage.jsx';
import RocksPage from './pages/RocksPage.jsx';  
import CDsPage from './pages/CDsPage.jsx';   
import Posters from './pages/Posters.jsx';  
import ArtProjects from './pages/ArtProjects.jsx'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/paintings" element={<PaintingPage />} />
        <Route path="/drawings" element={<DrawingsPage />} />
        <Route path="/rocks" element={<RocksPage />} /> 
        <Route path="/cds" element={<CDsPage />} />
        <Route path="/posters" element={<Posters />} />
        <Route path="/artprojects" element={<ArtProjects />} />
      </Routes>
    </Router>
  );
}
export default App