
import React, { useState } from 'react';
import './TaskList.css';
//props tasks,handleedit,handledelete
const TaskList = ({ tasks, handleEdit, handleDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState({ taskName: '', date: '' });
//callledwhwn the edit button is clicked
  const handleEditClick = (index, task) => {
    setEditIndex(index);
    setEditedTask({ ...task });
  };
//when userclick saves buttons
  const handleSaveClick = (index) => {
    handleEdit(index, editedTask);
    setEditIndex(null);
  };

  const handleCancelClick = () => {
    setEditIndex(null);
  };
  //called when the user types into the input fieds

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  return (
    <div className="task-list-container">
      {tasks.length > 0 && (
        <>
          <h2 className="task-list-heading">Added Task List</h2>
          <table className="tasks-table">
          {/* Start of the table header[thead] */}
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        name="taskName"
                        value={editedTask.taskName}
                        onChange={handleInputChange}
                      />
                    ) : (
                      task.taskName
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="date"
                        name="date"
                        value={editedTask.date}
                        onChange={handleInputChange}
                      />
                    ) : (
                      task.date
                    )}
                  </td>
                  <td className="action-icons">
                    {editIndex === index ? (
                      <>
                        <span onClick={() => handleSaveClick(index)} role="img" aria-label="checkmark">
                          &#10004;&#65039;
                        </span>
                        <span onClick={handleCancelClick} role="img" aria-label="cross">
                          &#10006;&#65039;
                        </span>
                      </>
                    ) : (
                      <>
                        <span onClick={() => handleEditClick(index, task)} role="img" aria-label="pencil">
                          &#9998;
                        </span>
                        <span onClick={() => handleDelete && handleDelete(index)} role="img" aria-label="trash-can">
                          🗑️
                        </span>
                      </>
                    )}
                  </td>
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
