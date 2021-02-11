//useEffect when the page loads.Hooks
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react'
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import Footer from './components/Footer';
import About from './components/About';
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  // const name = 'Shashwat';
  // const x = true;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks()
  }, //if the value changes, you can pass into the dependancy array down
    [])

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5050/tasks');
    const data = res.json();
    return data;
  }

  //fetch tasks
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5050/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  //Add task
  const addTask = async (task) => {
    console.log(task);
    const res = await fetch('http://localhost:5050/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await res.json()
    setTasks([...tasks, data])
    //const id =Math.floor(Math.random()*10000)+1;
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  //delete tasks

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5050/tasks/${id}`, {
      method: 'DELETE'
    });
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    console.log(taskToToggle.reminder);
    const updTask = { ...taskToToggle, reminder: !(taskToToggle.reminder) }
    const res = await fetch(`http://localhost:5050/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    console.log(id);
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task)
    )
  }

  return (
    <Router>
      <div className="container">
        <Header title="User" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ?
              (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
              ('No pending tasks')}
          </>
        )}
        />
        <Route path='/about' component={About} />
        <Footer />

        {/* <h1> Hello from React</h1>
      <h2>Rockstar Singh {name}</h2>
      <h3>{x ? 'Yes' : 'No'}</h3> */}


      </div>
    </Router>

  );
}
//class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
