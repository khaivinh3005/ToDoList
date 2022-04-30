import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faEdit , faTimes } from '@fortawesome/free-solid-svg-icons'
import TaskToDoItem from "./TaskToDoItem";

export default function TaskList() {
  return (
    <div className="container">
      <h1 className="mt-5">Task List</h1>
      <div className="task-list-content border border-primary">
        {/* To-Do */}
        <div className="to-do mx-2">
            <div className="card">
                <div className="card border-primary mb-3 mt-1" style={{ maxWidth: "20rem" }}>
                    <div className="card-header text-center text-white py-1">
                    <h5 className="card-title">To Do</h5>
                    </div>
                    <div className="content">
                       <TaskToDoItem />
                    </div>
                </div>
            </div>
          
        </div>

        {/* Done */}
        <div className="to-do mx-2">
          <div className="card border-primary mb-3 mt-1" style={{ maxWidth: "20rem" }}>
            <div className="card-header text-center text-white py-1">
              <h5 className="card-title">Done</h5>
            </div>

            <div className="content">
                <TaskToDoItem />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
