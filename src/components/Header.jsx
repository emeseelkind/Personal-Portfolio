// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="initials">Emese Elkind</span>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/paintings">Paintings</Link></li>
            <li><Link to="/drawings">Drawings</Link></li>
            <li><Link to="/rocks">Rocks</Link></li>
            <li><Link to="/cds">CDs</Link></li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
