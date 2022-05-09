import React , {useState} from "react";
import FormToDoList from "./FormToDoList";
import TaskList from "./TaskList";
import "./TodoList.styles.css";

export default function TodoList() {
  const defaultInfo = {
    id: null,
    taskName: '',
    priority: '',
    planStart: '',
    planFinish: '',
    status: '',
    score: null
  }
  const [userInfo, setUserInfo] = useState(defaultInfo);
  const [taskListTodo, setTaskListTodo] = useState([]);
  console.log('taskListTodo : ',taskListTodo)
  const [taskListDone, setTaskListDone] = useState([{id:"1",taskName:"Task name1" ,priority:"card-medium",score:"2"}])

  return (
    <div className="conatainer">
      <h1>Task Form</h1>
      <FormToDoList
        userInfo = {userInfo}
        setUserInfo = {setUserInfo}
        taskListTodo = {taskListTodo}
        setTaskListTodo = {setTaskListTodo} 
       />
      <TaskList
        userInfo = {userInfo}
        setUserInfo = {setUserInfo}
        taskListTodo = {taskListTodo}
        taskListDone = {taskListDone}
        setTaskListTodo = {setTaskListTodo} 
        setTaskListDone = {setTaskListDone}
       />
    </div>
  );
}
