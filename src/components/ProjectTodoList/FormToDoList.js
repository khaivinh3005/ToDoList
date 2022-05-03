import React , {useState} from "react";


export default function FormToDoList(props) {
  const {userInfo, setUserInfo} = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    taskName: '',
    score: null,
    priority: '',
    isError: false
  });
  


  const validatorUserInfo = (name, value) => {
    switch (name) {
      case 'taskName':
          if (!value || value.trim() === "") {
            setIsSubmitted(false)
            return `Task Name is Required`;
          } else {
            setIsSubmitted(true)
            return "";
          }

      case 'score':
        if (!value) {
          setIsSubmitted(false)
          return `Score is Required`;
        } 
        else if (value < 1 || value > 10 || !value.toString().match(/^[0-9]+(\.?[0-9]+)?$/) || !value.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
          setIsSubmitted(false)
          return `Score is > 0 and < 10`
        } else {
          setIsSubmitted(true)
          return "";
        }

      case 'priority':
        if (!value) {
          setIsSubmitted(false)
          return `priority is Required`;
          } else {
            setIsSubmitted(true)
            return "";
          }

      default: {
          return "";
        }
    }
  }

  const handleChangeinput = (e) => {
    const {value,name} = e.target;
    let index = new Date().toLocaleString();
    validatorUserInfo(name,value)
    setErrors({...errors, [name] : validatorUserInfo(name,value) , ['id']: index})
    setUserInfo({...userInfo , [name] : value , ['id']: index})
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    
  }



  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
          
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Task Name</label>
          <input type="text" className="form-control" placeholder="Example input" name="taskName" id="taskName" onChange={(e) => handleChangeinput(e)} value={userInfo.taskName}/>
          <div><span className="text-danger">{errors.taskName}</span></div>
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">score</label>
          <input type="text" className="form-control" placeholder="Another input" name="score" id="score" onChange={(e) => handleChangeinput(e)} value={userInfo.score} />
          <div><span className="text-danger">{errors.score}</span></div>
        </div>

        <div className="form-group">
          <label for="inputState">priority</label>
          <select  defaultValue="" name="priority" id="priority" class="form-control" onChange={(e) => handleChangeinput(e)} value={userInfo.priority}>
            <option value={''} selected>Choose --priority--</option>
            <option value={`important`}>important</option>
            <option value={`medium`}>medium</option>
            <option value={`normal`}>normal</option>
          </select>
          <div><span className="text-danger">{errors.priority}</span></div>
        </div>
        <div className="text-center">
            <button type="submit" className="btn btn-primary text-center">Add new task</button>
        </div>
      </form>        
    </div>
  );
}
