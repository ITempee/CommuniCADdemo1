import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Project!</h1>
      <p>This is the Home page. This project uses a combination of: React, React-Three_Fiber and Firebase</p>
      <p>These are the links to login, register, upload 3D model, and view 3D model:</p>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/upload">Upload Model</Link>
        </li>
        <li>
          <Link to="/view">View Model</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
