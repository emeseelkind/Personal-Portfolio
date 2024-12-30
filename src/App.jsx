
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home.jsx';
import PaintingPage from './pages/PaintingPage.jsx';
import DrawingsPage from './pages/DrawingPage.jsx';
import RocksPage from './pages/RocksPage.jsx';  
import CDsPage from './pages/CDsPage.jsx';      

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
      </Routes>
    </Router>
  );
}

export default App
