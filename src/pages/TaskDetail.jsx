import { useParams } from "react-router-dom";

export default function TaskDetail() {
  const { id } = useParams();

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) return <h2>Task Not Found ❌</h2>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>Status: {task.completed ? "Completed ✅" : "Pending ❌"}</p>
    </div>
  );
}