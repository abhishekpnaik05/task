import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Tasks from './Tasks'
import AddTasks from './AddTasks'

import React from 'react'

const Home = () => {
    const [showAddTasks,setShowAddTasks] = useState (true)
const [tasks, setTasks] = useState([
  {
     id: 1,
     text: 'Doctors Appointment',
     day: 'Feb 5th at 2:30',
     remainder: true,
  },
  {
     id: 2,
     text: 'Meeting at School',
     day: 'Feb 6th at 1:30',
     remainder: true,
  },
  {
     id: 3,
     text: 'Food Shooping',
     day: 'Feb 5th at 2:30',
     remainder: false,
  }
])
//Add Task
const addTask = (task) => {
const id = Math.floor(Math.random() * 10000) + 1

const newTask = { id, ...task }
localStorage.setItem("todo",newTask)
setTasks([...tasks, newTask])
}

//delete Task
const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !==id))
}

//Toggle Reminder
const toggleReminder = (id) => {
setTasks(
tasks.map((task) => task.id === id ? { ...task,reminder: !task.reminder } : task
)
)
}
  return (
    <div className="container">
    <Header onAdd={() => setShowAddTasks (!showAddTasks)} showAdd={showAddTasks}/>
    {showAddTasks && <AddTasks onAdd={addTask}/>}
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    ) : ('No Tasks To Show')}
   <Footer />
   </div>
  )
}

export default Home
