//useEffect when the page loads
import { useState, useEffect } from "react";
import React from 'react'
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
function App() {
  const [ showAddTask , setShowAddTask ] = useState(false);
  // const name = 'Shashwat';
  // const x = true;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }    

    getTasks()
  }, //if the value changes, you can pass into the dependancy array down 
  [])

  //fetch tasks
  const fetchTasks =async ()=> {
    const res = await fetch('http://localhost:5050/tasks');
    const data = await res.json();
    return data;
  }

    //Add task
    const addTask = (task) => {
      console.log(task);
      const id =Math.floor(Math.random()*10000)+1;
      const newTask = { id, ...task }
      setTasks([...tasks, newTask])
    }  

    //delete tasks

    const deleteTask = (id)=>{

      console.log('delete' , id);
      setTasks(tasks.filter((task)=> task.id!==id))
    }

    //toggle reminder
    const toggleReminder = (id) => {
      console.log(id);
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
      <Header title="User" onAdd={ ()=> setShowAddTask(!showAddTask) } showAdd= {showAddTask} />
      {showAddTask && <AddTask onAdd={ addTask }/>}
      {tasks.length > 0 ?
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 
      ('No pending tasks')}
      {/* <h1> Hello from React</h1>
      <h2>Rockstar Singh {name}</h2>
      <h3>{x ? 'Yes' : 'No'}</h3> */}
    </div>
  );
}
//class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
