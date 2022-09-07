import { useState } from 'react';
import './task.css'

const Task = (props)=>{
    const [BtShow , setBtShow] = useState(false)
    const clickHandler=()=>{
        setBtShow(!BtShow)
    }
    return(
        <div className={`task pr-${props.task.priority} `} onClick={clickHandler}>
            <p className={`task-name ${(BtShow&& !props.task.done)&&'blur'}`}>{props.task.name}</p>
            {(BtShow&& !props.task.done) && <div className='bt-cover'>
                <button className='bt bt-done' onClick={()=>props.done(props.task.id)}>&#10004;</button>
                <button className='bt bt-delete' onClick={()=>props.deleting(props.task.id)}>&#10006;</button>
            </div>}
        </div>
    );
}

export default Task;