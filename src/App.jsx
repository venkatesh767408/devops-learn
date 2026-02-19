import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (taskText) => {
    if (taskText.trim() === '') return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([newTask, ...tasks]);
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
    console.log(id);
  };

  return (
    <div className="app">
      <h1>Task Manager 7</h1>
      <h2 className="add-task">Add a Task here</h2>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
