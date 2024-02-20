
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import TaskList from './TaskList';
// import './HomePage.css';

// const HomePage = ({ tasks, clearAllTasks, editTask, deleteTask }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   return (
//     <div className="home-container">
//       <h1 className="add-task-heading">Add a New Task!</h1>
//       {tasks.length > 0 && (
//         <div>
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Search by task name"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <h2 className="task-list-heading">Added Task List</h2>
//         </div>
//       )}
//       <div className="button-container">
//         <Link to="/addtask">
//           <button className="add-task-button">+</button>
//         </Link>
//         <button onClick={clearAllTasks} className="clear-all-button">
//           Clear All
//         </button>
//       </div>

//       <TaskList
//         tasks={tasks.filter(task => task.taskName.toLowerCase().includes(searchTerm.toLowerCase()))}
//         handleEdit={editTask}
//         handleDelete={deleteTask}
//       />
//     </div>
//   );
// };

// export default HomePage;
// Inside the HomePage component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';
import './HomePage.css';

const HomePage = ({ tasks, clearAllTasks, editTask, deleteTask }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="home-container">
      <h1 className="add-task-heading">Add a New Task!</h1>
      {tasks.length > 0 && (
        <div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by task name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <h2 className="task-list-heading">Added Task List</h2>
        </div>
      )}
      <div className="button-container">
        <Link to="/addtask">
          <button className="add-task-button">+</button>
        </Link>
        <button onClick={clearAllTasks} className="clear-all-button">
          Clear All
        </button>
      </div>

      <TaskList
        tasks={tasks.filter(task => task.taskName.toLowerCase().includes(searchTerm.toLowerCase()))}
        handleEdit={editTask}
        handleDelete={deleteTask}
      />
    </div>
  );
};

export default HomePage;
