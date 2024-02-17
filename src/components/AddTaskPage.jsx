import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTaskPage.css'; // Import the CSS file

const AddTaskPage = ({ addTask }) => {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (taskName && date) {
      addTask({ taskName, date });
      navigate('/');
    }
  };

  return (
    <div className="add-task-container">
      <h1 className="add-task-heading">𝓐𝓭𝓭 𝓣𝓪𝓼𝓴</h1>
      <label className="add-task-label">
      𝓣𝓪𝓼𝓴 𝓝𝓪𝓶𝓮
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="add-task-input"
        />
      </label>
      <label className="add-task-label">
      𝒟𝒜𝒯𝐸
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="add-task-input"
        />
      </label>
      <button onClick={handleSubmit} className="add-task-button">
        Submit
      </button>
    </div>
  );
};

export default AddTaskPage;
