
// import React from 'react';
// import { Link } from 'react-router-dom';
// import TaskList from './TaskList'; // Import TaskList component
// import './HomePage.css';

// const HomePage = ({ tasks }) => {
//   return (
//     <div className="home-container">
//       <h1 className="add-task-heading">Add a Task!</h1>
//       <Link to="/add-task">
//         <button className="add-task-button">+</button>
//       </Link>

//       {/* Display added tasks below the Add Task button */}
//       <TaskList tasks={tasks} />
//     </div>
//   );
// };

// export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from './TaskList'; // Import TaskList component
import './HomePage.css';

const HomePage = ({ tasks }) => {
  return (
    <div className="home-container">
      <h1 className="add-task-heading">Add a Task!</h1>
      <Link to="/add-task">
        <button className="add-task-button">+</button>
      </Link>

      {/* Display added tasks below the Add Task button */}
      {tasks.length > 0 && <TaskList tasks={tasks} />}
    </div>
  );
};

export default HomePage;
