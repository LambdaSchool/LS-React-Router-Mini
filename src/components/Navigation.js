import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/About">About</Link>
        </div>
        <div>
          <Link to="/Contact">Contact</Link>
        </div>
        <div>
          <Link to="/Fun">About Bob</Link>
        </div>
        <div>
          <Link to="/Mandi">About Mandi</Link>
        </div>
        <div>
          <Link to="/Juana">About Juana</Link>
        </div>
        <div>
          <Link to="/Zach">About Zach</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
