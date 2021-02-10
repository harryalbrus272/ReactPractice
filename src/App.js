import { useState } from "react";
import React from 'react'
import Header from "./components/Header";
import Tasks from './components/Tasks';
function App() {
  const name = 'Shashwat';
  const x = true;
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Meeting at School',
      day: 'Feb 5th at 2:30pm',
      reminder: true,

    },
    {
      id: 2,
      text: 'Meeting at Office',
      day: 'Feb 6th at 12:30pm',
      reminder: true,

    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 8th at 1:50pm',
      reminder: true,

    }]);
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
      <Header title="Props" />
      {tasks.length > 0 ?
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 
      ('No pending tasks')}
      <h1> Hello from React</h1>
      <h2>Rockstar Singh {name}</h2>
      <h3>{x ? 'Yes' : 'No'}</h3>
    </div>
  );
}
//class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
