import React from "react";

export default function FormToDoList() {
  return (
    <div className="container">
      <form>
          
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Task Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">score</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
          />
        </div>

        <div className="form-group">
          <label for="inputState">priority</label>
          <select id="inputState" class="form-control">
            <option selected>Choose --priority--</option>
            <option>important</option>
            <option>medium</option>
            <option>normal</option>
          </select>
        </div>
        <div className="text-center">
            <button type="submit" className="btn btn-primary text-center">
            Add new task
            </button>
        </div>
      </form>        
    </div>
  );
}
