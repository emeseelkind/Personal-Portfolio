import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <span className="initials">Emese Elkind's Artwork</span>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/paintings">Paintings</Link></li>
            <li><Link to="/drawings">Drawings</Link></li>
            <li className="dropdown">
              <button 
                className="dropdown-button"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                More
                {showDropdown && (
                  <ul className="dropdown-menu">
                    <li><Link to="/rocks">Rocks</Link></li>
                    <li><Link to="/posters">Posters</Link></li>
                    <li><Link to="/cds">CDs</Link></li>
                    <li><Link to="/artprojects">Art Projects</Link></li>
                  </ul>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;