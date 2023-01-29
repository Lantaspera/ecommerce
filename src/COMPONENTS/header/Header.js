import React from 'react';
import '../header/Header.css';
import { Link } from 'react-router-dom';

function TopNavigation() {
  return (
    <nav className="top-nav">
      <ul className="top-nav__list">
        <li className="top-nav__item">
          <Link to="/" className="top-nav__link">Home</Link>
        </li>
        <li className="top-nav__item">
          <Link to="/products" className="top-nav__link">Products</Link>
        </li>
        <li className="top-nav__item">
          <Link to="/cart" className="top-nav__link">Cart</Link>
        </li>
        <li className="top-nav__item">
          <Link to="/about" className="top-nav__link">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavigation;
