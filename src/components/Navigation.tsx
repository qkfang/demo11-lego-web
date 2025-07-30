import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>LEGO Robotics Team</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/robotics">Robotics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;