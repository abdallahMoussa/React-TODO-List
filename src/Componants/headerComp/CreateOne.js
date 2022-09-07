import { useState , useRef  } from "react";
import './createOne.css'

const CreateOne = props =>{
    
    const [priority , setPriority ]  = useState('norm')
    const taskName = useRef()

    const changePrHandler=(e)=>{
        setPriority(e.target.value)
    }
    
    const submitHandler = (e)=>{
        e.preventDefault()
        const name = taskName.current.value;
        
        const task ={
            id: Math.random(),
            name:name,
            priority:priority,
            done:false
        }
        name&&props.addOne(task)
        taskName.current.value=''
    }
    return(
        <form onSubmit={submitHandler}>
               
                <select
                 className='selectPr'
                 onChange={changePrHandler}
                 value={priority}
                 style={{backgroundColor: priority === 'low'? 'darkorange':priority === 'norm'?'green':priority === 'high'? 'darkred':'red'}}>
                    <option value="low" >Low</option>
                    <option value="norm" >Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                </select>
                <input className='addTask' ref={taskName} type='text' maxLength={40} placeholder="add task.." />
                <button className='add'>Add</button>
                
            </form>
    );
}
export default CreateOne ;