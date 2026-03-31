import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return

    const newTask = {
      id: Date.now(),
      text: inputValue.trim(),
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new task..."
          className="task-input"
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.text}</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p className="empty-message">No tasks yet. Add one!</p>}
    </div>
  )
}

export default App
