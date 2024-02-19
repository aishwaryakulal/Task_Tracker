import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="add-task-heading">Add a Task!</h1>
      <Link to="/add-task">
        <button className="add-task-button">+</button>
      </Link>
    </div>
  );
};

export default HomePage;
