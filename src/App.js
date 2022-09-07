import React,{useState} from "react";
import Tasks from "./Componants/bodyComp/Tasks";
import AddTask from "./Componants/headerComp/AddTask";
import './app.css'
import FilterTasks from "./Componants/headerComp/FilterTasks";

function App() {

  const [tasks , setTasks] = useState([]) 
  const [filter , setFilter] = useState(false)

  const doneTask = id =>{
    setTasks((prev) => prev.filter(task=>{
      if(task.id === id){
        task.done = true
      }
      return task;
    }))    
  }

  const deleting = id =>{
    setTasks((prev)=>prev.filter(task =>{
      return task.id !== id && task 
     }
     ))
  }

  const filtering = ()=>{
    setFilter(!filter);
  }

  const clear= ()=>{
      setTasks( prev => prev.filter(t=> !t.done && t  ))
  }
  const addNewTask = task =>{
    setTasks(prevState =>[
      ...prevState,
      task
    ])
  }

  return (
    <div className="App">
      <div className="header">
        
        <AddTask addTask={addNewTask} />
        <FilterTasks count={ tasks.filter(t=>t.done).length} clear={clear} filter={filtering} />
      </div>
      <Tasks tasks={tasks} filtered={filter} deleting={deleting} done={doneTask} />
    </div>
  );
}

export default App;
