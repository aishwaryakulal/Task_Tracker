
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AddTaskPage from './components/AddTaskPage';
// import HomePage from './components/HomePage';

// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage tasks={tasks} />} />
//         <Route
//           path="/add-task"
//           element={<AddTaskPage addTask={addTask} tasks={tasks} />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTaskPage from './components/AddTaskPage';
import HomePage from './components/HomePage';

const App = () => {
  const [tasks, setTasks] = useState([]);

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
          path="/add-task"
          element={<AddTaskPage addTask={addTask} tasks={tasks} />}
        />
      </Routes>
    </Router>
  );
};

export default App;