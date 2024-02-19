import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTaskPage.css'
const AddTaskPage = ({ addTask, tasks }) => {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (taskName && date) {
      addTask({ taskName, date });
      setTaskName('');
      setDate('');
    }
  };

  return (
    <div className="add-task-container">
      <h1 className="add-task-heading">Add Task</h1>
      <label className="add-task-label">
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="add-task-input"
        />
      </label>
      <br />
      <label className="add-task-label">
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="add-task-input"
        />
      </label>
      <br />
      <button onClick={handleSubmit} className="add-task-button">
        Submit
      </button>

      {/* Display TaskList below the form */}
      <h2 className="added-tasks-heading">Added Tasks</h2>
      <table className="tasks-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.taskName}</td>
              <td>{task.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddTaskPage;
