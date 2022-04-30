import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faEdit , faTimes } from '@fortawesome/free-solid-svg-icons'

export default function TaskToDoItem() {
  return (
        <div className="card text-white bg-primary m-2" style={{ maxWidth: "18rem" }}>
             <div className="card-header card-header-task text-right">
                 <div>
                     <FontAwesomeIcon className="mr-2" style={{color:"black"}} icon={faEdit} />
                     <FontAwesomeIcon className="mr-2" style={{color:"red"}} icon={faTimes} size="lg" />
                </div>
            </div>
            <div className="card-body card-important">
            <h5 className="card-title text-left">Task1</h5>
            <div className="task-to-do">
                <div className="priority">
                    Priority: <span>important</span>
                </div>
                <div className="score">
                    Score: <span>1</span>
                </div>
            </div>
            <div type="" className="btn btn-primary d-block">Done</div>
            </div>
        </div>
  )
}
