import React, { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  // Add a new task
  const addTask = () => {
    if (taskName.trim()) {
      setTasks([
        ...tasks, 
        { id: Date.now(), name: taskName, isCompleted: false, timeSpent: 0 }
      ]);
      setTaskName("");
    }
  };

  return (
    <div className="app">
      <h1>To-Do List with Timer</h1>
      <div className="task-input">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="tasks">
        {tasks.map((task) => (
          <Task key={task.id} task={task} setTasks={setTasks} />
        ))}
      </div>

      <div className="clock">
        <div className="scale"></div>
      </div>
    </div>
  );
}

export default App;
