

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddTaskPage from './components/AddTaskPage';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css'
const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/add-task"
          element={
            <ErrorBoundary>
              <AddTaskPage addTask={addTask} />
            </ErrorBoundary>
          }
        />
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomePage tasks={tasks} />
            </ErrorBoundary>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
