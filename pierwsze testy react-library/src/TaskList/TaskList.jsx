import { useState, useEffect } from "react";

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const isLoading = tasks.length === 0;

  useEffect(() => {
    setTimeout(() => {
      setTasks(["Task 1", "Task 2"]);
    }, 200);
  }, []);

  if (isLoading) {
    return <div>Data is loading...</div>;
  }

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
