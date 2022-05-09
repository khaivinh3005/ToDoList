import React , {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faEdit , faTimes } from '@fortawesome/free-solid-svg-icons'
import TaskToDoItem from "./TaskToDoItem";
import TaskDoneItem from "./TaskDoneItem";

export default function TaskList(props) {
  const {taskListTodo,setTaskListTodo ,taskListDone,setTaskListDone,setUserInfo,userInfo} = props;
  
  return (
    <div className="container">
      <h1 className="mt-5">Task List</h1>
      <div className="task-list-content border border-primary">
          
        {/* To-Do */}
        <div className="to-do mx-2">
            <div className="card">
                <div className="card border-primary mb-3 " style={{ maxWidth: "20rem" }}>
                    <div className="card-header bg-success text-center text-white py-1">
                    <div className="d-flex taskTodo">
                      <div>
                        <h5 className="card-title">Assigned Task </h5>
                      </div>
                      <div>
                      {taskListTodo.map((taskItem,index) => {
                        if(taskItem.status === 'card-assigned') {
                          return (
                            <p>{taskListTodo.length}</p>
                          )
                        } 
                      })}
                      </div>
                    </div>
                    </div>
                    <div className="content">
                      {taskListTodo.map((taskItem,index) => {
                        if(taskItem.status === 'card-assigned') {
                          return (
                            <TaskToDoItem userInfo={userInfo} setUserInfo={setUserInfo}  taskListDone={taskListDone} setTaskListDone={setTaskListDone} taskListTodo={taskListTodo} setTaskListTodo={setTaskListTodo} taskItem={taskItem} key={index} isUndoTodo={false} />
                          )
                        } 
                      })}
                    </div>
                </div>
            </div>
          
        </div>

        {/* Done */}
        <div className="to-do mx-2">
          <div className="card border-primary mb-3 mt-1" style={{ maxWidth: "20rem" }}>
            <div className="card-header bg-info text-center text-white py-1">
            <div className="d-flex taskTodo">
                      <div>
                        <h5 className="card-title">Process Task </h5>
                      </div>
                      <div>
                      {taskListTodo.map((taskItem,index) => {
                        if(taskItem.status === 'card-inprocess') {
                          return (
                            <p>{taskListTodo.length}</p>
                          )
                        } 
                      })}
                      </div>
                    </div>
            </div>

            <div className="content">
                {taskListTodo.map((taskItem,index) => {
                  if(taskItem.status === 'card-inprocess') {
                    return (
                      <TaskDoneItem taskListDone={taskListDone} setTaskListDone={setTaskListDone} taskListTodo={taskListTodo} setTaskListTodo={setTaskListTodo} taskItem={taskItem} key={index} isUndoTodo={true} />
                     )
                  }
                })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
