import React from "react";
import Task from "./Task";
import './tasks.css'

const Tasks = (props)=>{
    return (
        <div className="tasks">
       {
       props.tasks.length > 0 ? props.filtered|| props.tasks.filter(t=>!t.done).length ? props.tasks.map(
        task => (props.filtered? task.done: !task.done) &&
        <Task
         done={props.done}
         deleting={props.deleting}
         key={task.id}
         task={task} />): <p className="noTask">No Tasks Existed</p> : <p className="noTask">No Tasks Existed</p>
       } 
       </div>
    )
}


export default Tasks;