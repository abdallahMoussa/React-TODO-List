import { useState } from 'react';
import './Filter.css'

const FilterTasks = props =>{
    var [checked , setCheck ] = useState(false); 
    
    const onchangeHandler = (e)=>{
            setCheck(e.target.checked);
            
            props.filter(); 
    }
    return(
        <div className='complete-tasks'>
            <div>
                <input type="checkbox" onChange={onchangeHandler} />
                <label>Completed</label>
            </div>
            {( Boolean(props.count) && checked ) && <button onClick={()=>props.clear()} className='clear-all'>Clear All</button>}
        </div>       
    );
}

export default FilterTasks;