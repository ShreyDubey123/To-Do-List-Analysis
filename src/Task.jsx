import React, { useState, useEffect } from 'react';
import './Task.css';  // Import task-specific styles

function Task({ task, setTasks }) {
  const [timeSpent, setTimeSpent] = useState(task.timeSpent);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  const [dropped, setDropped] = useState(false);

  // Timer effect: increments time every second
  useEffect(() => {
    if (!isCompleted) {
      const interval = setInterval(() => {
        setTimeSpent((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isCompleted]);

  const markCompleted = () => {
    setIsCompleted(true);
    setDropped(true);
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, isCompleted: true, timeSpent: timeSpent } : t
      )
    );
  };

  return (
    <div className={`task ${isCompleted ? 'completed' : ''}`}>
      <div className="task-details">
        <h3>{task.name}</h3>
        <p>Time Spent: {timeSpent}s</p>
      </div>
      <button onClick={markCompleted} disabled={isCompleted}>
        {isCompleted ? 'Completed' : 'Mark as Complete'}
      </button>

      {dropped && (
        <div className="task-name-on-clock">
          {task.name}
        </div>
      )}
    </div>
  );
}

export default Task;
