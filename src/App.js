
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTaskPage from './components/AddTaskPage';
import HomePage from './components/HomePage';

const App = () => {
  //Using the localStorage API to retrieve previously stored tasks, initializing the tasks state using the useState hook.
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(storedTasks);
//Using the useEffect hook to update the local storage whenever the tasks state changes.
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
//It uses the spread operator (...) to create a new array that includes all existing tasks (tasks) and adds the new task to the end.
//It then updates the tasks state using setTasks with the new array.
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
    //splice method to remove one element at the specified index from the copied array.
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

