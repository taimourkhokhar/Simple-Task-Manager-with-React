import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (title === "" || desc === "") return

    const newTask = { title, desc }
    setTasks([...tasks, newTask])

    setTitle("")
    setDesc("")
  }

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete)
    setTasks(updatedTasks)
  }

  return (
    <div className="container">
      <h1 id="green">Task Manager</h1>

      <div className="section2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button onClick={addTask}>Create</button>
      </div>

      <h2>Tasks</h2>

      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <h3>{task.title}</h3>
            <p>{task.desc}</p>

            <button className='deleter' onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App