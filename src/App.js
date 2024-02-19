
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTaskPage from './components/AddTaskPage';
import HomePage from './components/HomePage';

const App = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(storedTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };
  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage tasks={tasks} clearAllTasks={clearAllTasks} editTask={editTask} deleteTask={deleteTask} />}
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

