import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

function TaskDoneItem(props) {
  const {
    isUndoTodo,
    taskItem,
    taskListTodo,
    setTaskListTodo,
    taskListDone,
    setTaskListDone,
  } = props;

  const handleRemoveTask = (taskItem) => {
    let index = taskListTodo.findIndex((item) => item.id === taskItem.id);
    if (index !== -1) {
      let newTaskListDone = [...taskListTodo];
      newTaskListDone.splice(index, 1);
      setTaskListTodo(newTaskListDone);
    }
  };

  return (
    <div className="card text-black bg-white m-2" style={{ maxWidth: "18rem" }}>
      <div className="card-header card-header-task text-right bg-white">
        <div className="task-to-do">
          <h6 className="card-title text-left font-weight-bold">
            {taskItem?.taskName}
          </h6>
          <div>
            <i className="far fa-edit"></i>
          </div>
        </div>

        <div className="task-to-do">
          <div className="priority fs-6">
            Start: <span className="fs-6">{taskItem?.planStart}</span>
          </div>
          <div className="score fs-6">
            Finish: <span className="fs-6">{taskItem?.planFinish}</span>
          </div>
          <div>
            <i
              onClick={() => handleRemoveTask(taskItem)}
              className="far fa-trash"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDoneItem;
