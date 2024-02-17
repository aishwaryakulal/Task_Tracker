

import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';
import './HomePage.css'
const HomePage = ({ tasks }) => {
  return (
    <div>
      <h1>𝓗𝓞𝓜𝓔 𝓟𝓐𝓖𝓔</h1>
      <Link to="/add-task">
        <button>Add Task</button>
      </Link>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;
