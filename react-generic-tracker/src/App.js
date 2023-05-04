import { useState } from "react"
import Header from './Header';
import Button from './components/button';
import AddItem from "./components/additem";
import './App.css';

import Items from './components/items';
import NavBar from "./components/nav-bar";

function App() {
  const [user, setUser] = useState([
    {
      id:1,
      username:'greyson',
      email:'ss@ss.com',
    }
  ])

  const [showaddbtn, setShowbtn] = useState(false) 
  const [tasks,setTasks] =useState([
    {
        id:1,
        name:'Food with bois',
        Amount:'400',
        category:'Food',
        reminder:true,
    },
    {
        id:2,
        name:'Groceries',
        Amount:'1000',
        category:'Household',
        reminder:true,

    },
    {
        id:3,
        name:'Bills of phone',
        Amount:'3000',
        category:'Bills',
        reminder:true,

    }
]

)
const delTask = (id) => {
  setTasks(tasks.filter((task) => task.id!==id ))
  
}

const toggleReminder = (id) => {setTasks(
  tasks.map((task)=> task.id===id ? { ...task, reminder: !task.reminder} : task)
)}

const newtask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const savedTask ={id, ...task}
  setTasks([...tasks, savedTask])
  console.log(savedTask)
  
}

// let response = await fetch('https://api.kanye.rest')

    
  return (
    <div className='app'>
      <NavBar user={user}/>
      <Header btnvalue={showaddbtn} clas='header' title='Generic Tracker' showform={() => setShowbtn(!showaddbtn)}/>
      {showaddbtn && <AddItem savetask={newtask} />}
      <Items tasks={tasks} delItems={delTask} ToggleReminder={toggleReminder} />


    </div>
    
  );
}

export default App;
