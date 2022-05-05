import React , {useState , useEffect} from "react";


export default function FormToDoList(props) {
  const {userInfo, setUserInfo , taskListTodo, setTaskListTodo} = props;
  const [formErrors, setFormErrors] = useState({});

  console.log('userInfo : ',userInfo)

  const handleChangeinput = (e) => {
    const {value,name} = e.target;
    let index = new Date().toLocaleString();
    setUserInfo({...userInfo , [name] : value , ['id']: index})
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(userInfo));
    if(userInfo.taskName !== '' && userInfo.score !== '' && userInfo.priority !=='' && formErrors) {
      setTaskListTodo([...taskListTodo,userInfo]);
    }
    
    setUserInfo({
      id: '',
      taskName: '',
      priority: '',
      score: ''
    })

  }

  const validate = (values) => {
    const errors = {};

    if (!values.taskName) {
      errors.taskName = "TaskName is required !";
    } 

    if (!values.score) {
      errors.score = "Score is required !";
    } else if(values.score < 1 || values.score > 10 || !values.score.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
      errors.score = `Score is > 0 and < 10`
    }

    if(!values.priority) {
      errors.priority = "Priority is required !";
    }

    return errors;
  }



  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
          
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Task Name</label>
          <input type="text" className="form-control" placeholder="Example input" name="taskName" id="taskName" onChange={handleChangeinput} value={userInfo.taskName}/>
          <div><span className="text-danger">{formErrors.taskName}</span></div>
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">score</label>
          <input type="text" className="form-control" placeholder="Another input" name="score" id="score" onChange={handleChangeinput} value={userInfo.score} />
          <div><span className="text-danger">{formErrors.score}</span></div>
        </div>

        <div className="form-group">
          <label for="inputState">priority</label>
          <select  name="priority" id="priority" class="form-control" onChange={handleChangeinput} value={userInfo.priority}>
            <option value={''} selected>Choose --priority--</option>
            <option value={`card-important`}>important</option>
            <option value={`card-medium`}>medium</option>
            <option value={`card-normal`}>normal</option>
          </select>
          <div><span className="text-danger">{formErrors.priority}</span></div>
        </div>
        <div className="text-center">
            <button type="submit" className="btn btn-primary text-center">Add new task</button>
        </div>
      </form>        
    </div>
  );
}
