import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faEdit , faTimes } from '@fortawesome/free-solid-svg-icons'

export default function TaskToDoItem(props) {
const {taskItem , taskListTodo , setTaskListTodo , taskListDone , setTaskListDone, setUserInfo , userInfo} = props;
console.log('taskItem : ',taskItem)

const handleRemoveTask = (taskItem) => {
    console.log('taskItem : ',taskItem)
    let index = taskListTodo.findIndex((item) => item.id === taskItem.id);
    if(index !== -1) {
        let newArr = [...taskListTodo];
        newArr.splice(index,1)
        setTaskListTodo([...newArr])
    }
}

const handleChangeDone = (taskName) => {
    console.log('taskName : ',taskName)
    let indexInTaskTodo = taskListTodo.findIndex((item) => item.id === taskName.id);
    if (indexInTaskTodo !== -1) {
        let newTaskListTodo = [...taskListTodo];
        newTaskListTodo.splice(indexInTaskTodo,1)
        setTaskListTodo(newTaskListTodo)

        let newTaskListDone = [...taskListDone];
        let indexInTaskDone = newTaskListDone.findIndex(item => item.id === indexInTaskTodo);
        if (indexInTaskDone === -1) {
            newTaskListDone.push(taskName);
            setTaskListDone(newTaskListDone)
        }
    }
}

const handleRejectTask = (taskItem) => {
    setUserInfo(taskItem)
}

  
return (
        <div className="card text-black bg-primary m-2" style={{ maxWidth: "18rem" }}>
             <div className="card-header card-header-task text-right">
                 <div>
                     <FontAwesomeIcon onClick={() => handleRejectTask(taskItem)} className="mr-2" style={{color:"black"}} icon={faEdit} />
                     <FontAwesomeIcon onClick={() => handleRemoveTask(taskItem)} className="mr-2" style={{color:"red"}} icon={faTimes} size="lg" />
                </div>
            </div>
            <div className={`card-body ${taskItem?.priority}`}>
            <h5 className="card-title text-left">{taskItem?.taskName}</h5>
            <div className="task-to-do">
                <div className="priority">
                    Priority: <span>{taskItem?.priority?.replace("card-","")}</span> 
                </div>
                <div className="score">
                    Score: <span>{taskItem?.score}</span>
                </div>
            </div>
               <div onClick={() => handleChangeDone(taskItem)} type="" className="btn btn-primary d-block">Done</div>
               {/* <div type="" className="btn btn-primary d-block">Done</div> */}
            </div>
        </div>
  )
}
