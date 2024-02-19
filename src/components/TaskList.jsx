
import React from 'react';
import './TaskList.css'; 

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list-container">
      {tasks.length > 0 && (
        <>
          <h2 className="task-list-heading"> Added Task List</h2>
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
        </>
      )}
    </div>
  );
};

export default TaskList;
