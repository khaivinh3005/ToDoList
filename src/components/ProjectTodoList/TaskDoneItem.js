import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faEdit , faTimes } from '@fortawesome/free-solid-svg-icons'

function TaskDoneItem(props) {
  const {isUndoTodo , taskItem , taskListTodo , setTaskListTodo , taskListDone , setTaskListDone} = props;

  const handleRemoveTask = (taskItem)  => {
    let index = taskListDone.findIndex(item => item.id === taskItem.id);
    if (index !== -1) {
        let newTaskListDone = [...taskListDone];
        newTaskListDone.splice(index,1);
        setTaskListDone(newTaskListDone)
    }
  } 

  const handleUndoTodo = (taskName) => {
    let indexInTaskDone = taskListDone.findIndex(item => item.id === taskName.id);
    if(indexInTaskDone !== -1) {
        let newListTaskDone = [...taskListDone];
        newListTaskDone.splice(indexInTaskDone,1);
        setTaskListDone(newListTaskDone);

        let indexOfTaskTodo = taskListTodo.findIndex(item => item.id === indexInTaskDone);
        if(indexOfTaskTodo === -1) {
            let newListTaskTodo = [...taskListTodo];
            newListTaskTodo.push(taskItem);
            setTaskListTodo(newListTaskTodo);
        }
    }
    
  }

  return (
    <div className="card text-black bg-primary m-2" style={{ maxWidth: "18rem" }}>
             <div className="card-header card-header-task text-right">
                 <div>
                     <FontAwesomeIcon onClick={() => handleRemoveTask(taskItem)} className="mr-2" style={{color:"red"}} icon={faTimes} size="lg" />
                </div>
            </div>
            <div className={`card-body ${taskItem?.priority}`}>
            <h5 className="card-title text-left">{taskItem?.taskName}</h5>
            <div className="task-to-do">
                <div className="priority">
                    Priority: <span>{taskItem ?  taskItem?.priority?.replace("card-","") : ""}</span> 
                </div>
                <div className="score">
                    Score: <span>{taskItem?.score}</span>
                </div>
            </div>
               <div onClick={() => handleUndoTodo(taskItem)} type="" className="btn btn-primary d-block">Undo to To do</div> 
               {/* <div  type="" className="btn btn-primary d-block">Undo to To do</div>  */}
            </div>
        </div>
  )
}

export default TaskDoneItem