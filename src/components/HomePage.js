// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';
import './HomePage.css';

const HomePage = ({ tasks, clearAllTasks, editTask, deleteTask }) => {
  return (
    <div className="home-container">
      <h1 className="add-task-heading">Add a New Task!</h1>
      <div className="button-container">
        <Link to="/addtask">
          <button className="add-task-button">+</button>
        </Link>
        <button onClick={clearAllTasks} className="clear-all-button">
          Clear All
        </button>
      </div>

      <TaskList tasks={tasks} handleEdit={editTask} handleDelete={deleteTask} />
    </div>
  );
};

export default HomePage;
