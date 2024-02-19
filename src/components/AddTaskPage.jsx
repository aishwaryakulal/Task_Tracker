
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AddTaskPage.css';

// const AddTaskPage = ({ addTask }) => {
//   const navigate = useNavigate();
//   const [taskName, setTaskName] = useState('');
//   const [date, setDate] = useState('');

//   const handleSubmit = () => {
//     if (taskName && date) {
//       addTask({ taskName, date });
//       setTaskName('');
//       setDate('');
//     } else {
//       alert('Task Name and Date cannot be blank');
//     }
//   };

//   return (
//     <div className="add-task-container">
//       <h1 className="add-task-heading">Add Task</h1>
//       <label className="add-task-label">
//         Task Name:
//         <input
//           type="text"
//           value={taskName}
//           onChange={(e) => setTaskName(e.target.value)}
//           className="add-task-input"
//         />
//       </label>
//       <br />
//       <label className="add-task-label">
//         Date:
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="add-task-input"
//         />
//       </label>
//       <br />
//       <button onClick={handleSubmit} className="add-task-button">
//         Submit
//       </button>
      
//       {/* Back button to navigate to home page */}
//       <button onClick={() => navigate('/')} className="add-task-button">
//         Back to Home
//       </button>
//     </div>
//   );
// };

// export default AddTaskPage;
// AddTaskPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTaskPage.css';

const AddTaskPage = ({ addTask }) => {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (taskName && date) {
      addTask({ taskName, date });
      setTaskName('');
      setDate('');
    } else {
      alert('Task Name and Date cannot be blank');
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
      
      {/* Back button to navigate to home page */}
      <button onClick={() => navigate('/')} className="back-to-home-button">
        Back to Home
      </button>
    </div>
  );
};

export default AddTaskPage;
