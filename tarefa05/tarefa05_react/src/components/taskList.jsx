import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";

const TaskList = ({ tasks, setTasks }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleEditSave = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditedTask("");
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleEditSave(index);
    }
  };

  const shouldHighlight = (task) => {
    return /estudar|ler/i.test(task);
  };

  const handleToggleCompletion = (index) => {
    const updatedCompletedTasks = [...completedTasks];
  
    if (updatedCompletedTasks.includes(index)) {
      // Se a tarefa estava concluída, remove da lista
      updatedCompletedTasks.splice(updatedCompletedTasks.indexOf(index), 1);
    } else {
      // Se a tarefa não estava concluída, adiciona à lista
      updatedCompletedTasks.push(index);
    }
  
    setCompletedTasks(updatedCompletedTasks);
  };

  const shouldApplyLineThrough = (index) => {
    return (
      completedTasks.includes(index) );
  };

  return (
    <div className="text-center max-width-400 mx-auto" style={{ width: "70%" }}>
      <ul className="list-unstyled">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`d-flex justify-content-between align-items-center border-bottom py-2 ${
              shouldHighlight(task) ? "highlight-task" : ""
            }`}
            style={{ margin: "8px 0" }}
          >
            <input
              type="checkbox"
              checked={completedTasks.includes(index)}
              onChange={() => handleToggleCompletion(index)}
            />
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={handleEditChange}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className="cursor-pointer text-success"
                  onClick={() => handleEditSave(index)}
                />
              </>
            ) : (
              <>
                <div
                  style={{
                    overflowX: "auto",
                    flex: 1,
                    marginRight: "10px",
                    marginLeft: "10px"
                  }}
                >
                  <span
                    className={`${
                      shouldApplyLineThrough(index) ? "lineThrough" : ""
                    }`}
                    onClick={() => handleEdit(index)}
                  >
                    {task}
                  </span>
                </div>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="delete-icon cursor-pointer text-danger"
                  onClick={() => handleDelete(index)}
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
