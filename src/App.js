import Header from './components/Header'
import Tasks from './components/tasks'
import React, { useState } from 'react'
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:"Doctors Appointment",
        day:"Feb 5th at 2:30pm",
        reminder:false,
    },
    {
        id:2,
        text:"Food Shopping",
        day:"Feb 6th at 4:30pm",
        reminder:false,
    },
    {
        id:3,
        text:"Take Test",
        day:"Monday 5pm",
        reminder:true,
    },
]);
const [editClick,setEditClick] = useState(false)
const Ondelete = (id) => {
 setTasks(tasks.filter(task => {
   return task.id !== id
 }))
} 

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => {
    return task.id === id ? {...task,reminder : !task.reminder} : task
    })
  );
}
  const onAdd = (task) => {
    setTasks([...tasks,task])
  }

  const edit = () => {
    setEditClick(editClick ? false : true)
    //getting the add task component to open
    setShowAddTask(showAddTask ? false : true)
    //whenever i open i want to get the data from the current listItem i get
  }
  const editData = (id) => {
    if(editClick){
      let currentDataText = tasks.map((task) => {
        return task.text
      })
      console.log(currentDataText[0])

      return currentDataText[0]

    }
    
  }
  const clicked = () => {
console.log(editClick)
  }
  const editDataText = () => {
    if(!editClick){
      return editData()
    }
  }

    return <div className = "container">
      <Header onShowAdd = {() => setShowAddTask(!showAddTask)} 
      showAdd = {showAddTask}
      />
      
{ showAddTask ?  <AddTask clicked = {clicked} editDataText = {editDataText} onAdd = {onAdd}/> : ''}

      <Tasks edit = {edit} editData = {editData} tasks = {tasks} Ondelete ={Ondelete} onToggle = {toggleReminder}/>
    </div>
}

export default App;
