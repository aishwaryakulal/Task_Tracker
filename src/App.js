
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTaskPage from './components/AddTaskPage';
import HomePage from './components/HomePage';

const App = () => {
  // Load tasks from localStorage on initial render
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(storedTasks);

  // Save tasks to localStorage whenever tasks are updated
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage tasks={tasks} />}
        />
        <Route
          path="/addtask"
          element={<AddTaskPage addTask={addTask} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
