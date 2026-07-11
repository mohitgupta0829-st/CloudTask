import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks?userId=1");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async () => {
    if (!title.trim()) return;

    try {
      await api.post("/tasks", {
        title,
        userId: 1,
      });

      setTitle("");
      fetchTasks();
    } catch (error) {
      console.error(error);
      }
  };
  const deleteTask = async (id) => {
  try {
    await api.delete(`/tasks/${id}`);

    fetchTasks();

  } catch (error) {
    console.error(error);
    }
  };
  const toggleTask = async (task) => {
  try {
    await api.put(`/tasks/${task.id}`, {
      title: task.title,
      completed: !task.completed,
    });

    fetchTasks();

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="min-h-screen bg-[var(--background)] p-8">

      <h1 className="mb-6 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="mb-8 flex gap-3">
        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 rounded-xl border p-3"
        />

        <button
          onClick={createTask}
          className="rounded-xl bg-[var(--primary)] px-6 text-white"
        >
          Add
        </button>
      </div>

      {tasks.map((task) => (
        <div
          key={task.id}
          className="mb-3 rounded-xl border bg-white p-4 shadow-sm"
        >
          <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task)}
        />

  <h2
    className={`font-semibold ${
      task.completed ? "line-through text-gray-400" : ""
    }`}
  >
    {task.title}
  </h2>

</div>

          <div className="mt-3 flex items-center justify-between">

        <p className="text-sm text-gray-500">
          {task.completed ? "Completed" : "Pending"}
        </p>

        <button
          onClick={() => deleteTask(task.id)}
          className="rounded-lg bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
        >
          Delete
        </button>

        </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;