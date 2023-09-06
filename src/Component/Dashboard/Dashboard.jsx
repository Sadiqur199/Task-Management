import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setFilter] = useState('all'); 
  const [sortBy, setSortBy] = useState('dueDate'); 

  const filteredAndSortedTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return task.status === 'completed';
    } else {
      return task.status === 'inProgress';
    }
  }).sort((taskA, taskB) => {
    if (sortBy === 'dueDate') {
      return new Date(taskA.dueDate) - new Date(taskB.dueDate);
    } else {
      const priorityOrder = { low: 1, medium: 2, high: 3 };
      return priorityOrder[taskA.priority] - priorityOrder[taskB.priority];
    }
  });

  const handleTaskCreate = (newTask) => {
    newTask.id = Date.now().toString();

    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.status = task.status === 'inProgress' ? 'completed' : 'inProgress';
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-10 text-center">Task Management Dashboard</h1>
      <div>
        <h1 className="text-xl font-semibold mb-5 mt-8 text-center">Task Form</h1>
        <TaskForm className="shadow-md rounded-lg p-4 shadow-gray-600" addTask={handleTaskCreate} />
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-5 mt-8 text-center">Task List</h1>
        <div className="mb-5">
          <label className="block font-semibold mb-2">Filter by Status:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded shadow-md"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="inProgress">In Progress</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block font-semibold mb-2">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border p-2 rounded shadow-md"
          >
            <option value="dueDate">Due Date</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <TaskList tasks={filteredAndSortedTasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default Dashboard;
