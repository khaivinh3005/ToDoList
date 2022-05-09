import React , {useState , useEffect} from "react";


export default function FormToDoList(props) {
  const {userInfo, setUserInfo , taskListTodo, setTaskListTodo} = props;
  console.log('taskListTodo : ',taskListTodo)
  const [formErrors, setFormErrors] = useState({});

  console.log('userInfo : ',userInfo)

  const handleChangeinput = (e) => {
    console.log(e);
    const {value,name} = e.target;
    let index = new Date().toLocaleString();
    setUserInfo({...userInfo , [name] : value , ['id']: index})
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(userInfo));
    if(userInfo.taskName !== '' && userInfo.planStart !== '' && userInfo.planFinish !== '' && userInfo.status !=='' && formErrors) {
      setTaskListTodo([...taskListTodo,userInfo]);
      setUserInfo({
        taskName: '',
        planStart: '',
        planFinish: '',
        status: ''
      })
    } 
  }

  const validate = (values) => {
    console.log('values : ',values)
    const errors = {};

    if (!values.taskName) {
      errors.taskName = "TaskName is required !";
    } 

    if (!values.score) {
      errors.score = "Score is required !";
    } else if(values.score < 1 || values.score > 10 || !values.score.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
      errors.score = `Score is > 0 and < 10`
    }

    if (!values.planStart) {
      errors.planStart = "plan Start is required !";
    } 

    if (!values.plantFinish) {
      errors.planFinish = "date Finish is required !";
    } 
    if(!values.status) {
      errors.status = "status is required !";
    }

    return errors;
  }



  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="container">
            <form>

                <div className="form-group row">
                    <label htmlFor="inputTaskName" className="col-sm-2 col-form-label">Task name</label>
                    <div className="col-sm-10">
                        <input type="Text" onChange={handleChangeinput} className="form-control" name="taskName" id="taskName" value={userInfo.taskName}
                    />
                    </div>
                    <div><span className="text-danger text-center">{formErrors.taskName}</span></div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPlanStart" className="col-sm-2 col-form-label">Plan Start</label>
                    <div className="col-sm-10">
                        <input value={userInfo.planStart} type="Date" onChange={handleChangeinput} className="form-control" name="planStart" id="planStart"
                        />
                    </div>
                    <div><span className="text-danger text-center">{formErrors.planStart}</span></div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPlanFinish" className="col-sm-2 col-form-label">Plan Finish</label>
                    <div className="col-sm-10">
                        <input value={userInfo.planFinish} type="Date" onChange={handleChangeinput} className="form-control" name="planFinish" id="planFinish"
                        />
                    </div>
                    <div><span className="text-danger">{formErrors.planFinish}</span></div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputStatus" className="col-sm-2 col-form-label">Status</label>
                    <div className="col-sm-10">
                        <select value={userInfo.status}  name="status" id="status"  onChange={handleChangeinput}  className="form-control">
                            <option value={''} selected>Choose --status--</option>
                            <option value={`card-assigned`}>Assigned</option>
                            <option value={`card-inprocess`}>In-Process</option>

                        </select>
                    </div>

                    <div><span className="text-danger text-center">{formErrors.status}</span></div>
                </div>
            </form>
            <button className="btn bg-success text-white ml-5">Add New Task</button>
        </div>
      </form>        
    </div>
  );
}
