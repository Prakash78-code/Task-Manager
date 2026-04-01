import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = () => {
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      title: input,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Toggle Complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Filter
  const filteredTasks =
    filter === "active"
      ? tasks.filter((t) => !t.completed)
      : tasks;

  return (
    <div style={{ padding: "20px" }}>
      <h1>📋 Task Manager</h1>

      {/* Input */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add</button>

      <br /><br />

      {/* Filter */}
      <Link to="/tasks?filter=active">Show Active</Link>

      <ul style={{ listStyle: "none", padding: 0 }}>
  {filteredTasks.map((task) => (
    <li
      key={task.id}
      style={{
        margin: "10px 0",
        padding: "15px",
        borderRadius: "12px",
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.05)",
        boxShadow: "0 0 10px rgba(255,0,0,0.3)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          cursor: "pointer",
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>

      <div>
        <Link to={`/tasks/${task.id}`}>🔍</Link>
        <button onClick={() => deleteTask(task.id)}>❌</button>
      </div>
    </li>
  ))}
</ul>