import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completedTasks.length}</p>
    </div>
  );
}

export default App;
