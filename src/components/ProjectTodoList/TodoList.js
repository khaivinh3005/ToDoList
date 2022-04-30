import React from "react";
import FormToDoList from "./FormToDoList";
import TaskList from "./TaskList";
import "./TodoList.styles.css";

export default function TodoList() {
  return (
    <div className="conatainer">
      <h1>Task Form</h1>
      <FormToDoList />
      <TaskList />
    </div>
  );
}
