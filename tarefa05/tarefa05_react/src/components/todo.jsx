import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TaskList from "./taskList";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <>
      <div className="mb-3 text-center ">
        <Form className="d-flex justify-content-center align-items-center">
          <Form.Control
            type="text"
            placeholder="Digite sua tarefa"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown ={handleKeyPress}
            style={{
              borderRadius: "0px",
              borderBottom: "1px solid gray",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              outline: "none",
              boxShadow: "none",
              width: "70%"
            }}
          />
          <FontAwesomeIcon
            icon={faPlus}
            style={{ cursor: "pointer", marginLeft: "10px" }}
            onClick={handleAdd}
          />
        </Form>
      </div>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default Todo;
