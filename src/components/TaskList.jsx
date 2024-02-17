

import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks ? (
            tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.taskName}</td>
                <td>{task.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No tasks available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
