

import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';
import './HomePage.css'
const HomePage = ({ tasks }) => {
  return (
    <div>
      <h1>ADD A TASK!</h1>
      <Link to="/add-task">
        <button>➕</button>
      </Link>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;
