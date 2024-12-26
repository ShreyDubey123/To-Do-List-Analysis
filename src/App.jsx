import React, { useState } from 'react';
import './App.css';
import Task from './Task';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

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

  // Pie chart data calculation
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const totalTasks = tasks.length;
  const percentageCompleted = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

  const data = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        data: [percentageCompleted, 100 - percentageCompleted],
        backgroundColor: ['#28a745', '#dc3545'],
        hoverBackgroundColor: ['#218838', '#c82333'],
      },
    ],
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

      <div className="pie-chart">
        <h2>Task Completion</h2>
        <Pie data={data} />
      </div>
    </div>
  );
}

export default App;
