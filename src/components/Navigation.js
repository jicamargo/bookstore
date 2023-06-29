import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from '../icons';

function Navigation() {
  return (
    <nav className="panel-bg">
      <div className="nav-header">
        <span className="Bookstore-CMS Text-Style-3">Bookstore CMS</span>
      </div>
      <nav className="nav-menu-and-user">
        <ul className="nav-menu">
          <li>
            <Link to="/" className="BOOKS Text-Style-6">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories" className="CATEGORIES Text-Style-6">CATEGORIES</Link>
          </li>
        </ul>
        <div className="oval">
          <div className="user-icon">
            <UserIcon />
          </div>
        </div>
      </nav>
    </nav>
  );
}

export default Navigation;
