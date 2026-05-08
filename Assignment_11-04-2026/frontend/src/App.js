import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      setError("");
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load tasks.");
    }
  };

  // Add task
  const addTask = async () => {
    if (!title) return;

    try {
      setError("");
      await axios.post("http://localhost:5000/api/tasks", {
        title,
      });

      setTitle("");
      fetchTasks();
    } catch (err) {
      setError(err.response?.data?.message || "Unable to add task.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
