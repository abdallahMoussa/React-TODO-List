import React from 'react';
import CreateOne from './CreateOne';


const AddTask = props=>{
    return(
        <>
          <CreateOne addOne={props.addTask} />         
        </>
    );
}

export default AddTask;