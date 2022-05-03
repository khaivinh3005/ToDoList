import React , {useState} from "react";
import FormToDoList from "./FormToDoList";
import TaskList from "./TaskList";
import "./TodoList.styles.css";

export default function TodoList() {
  const defaultInfo = {
    id: null,
    taskName: '',
    priority: '',
    score: null
  }
  const [userInfo, setUserInfo] = useState(defaultInfo);

  return (
    <div className="conatainer">
      <h1>Task Form</h1>
      <FormToDoList
        userInfo= {userInfo}
        setUserInfo= {setUserInfo} 
       />
      <TaskList />
    </div>
  );
}
