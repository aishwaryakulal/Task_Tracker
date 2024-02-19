

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import AddTaskPage from './components/AddTaskPage';
// import ErrorBoundary from './components/ErrorBoundary';
// import './styles.css'
// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/add-task"
//           element={
//             <ErrorBoundary>
//               <AddTaskPage addTask={addTask} />
//             </ErrorBoundary>
//           }
//         />
//         <Route
//           path="/"
//           element={
//             <ErrorBoundary>
//               <HomePage tasks={tasks} />
//             </ErrorBoundary>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddTaskPage from './components/AddTaskPage';

const HomePage = () => {
  return (
    <div>
      <h1>Add a Task!</h1>
      <Link to="/add-task">
        <button>+</button>
      </Link>
    </div>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/add-task"
          element={<AddTaskPage addTask={addTask} tasks={tasks} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
