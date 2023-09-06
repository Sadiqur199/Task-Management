import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');
  const [assignee, setAssignee] = useState('');
  const [status, setStatus] = useState('inProgress');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), 
      title,
      description,
      dueDate,
      priority,
      assignee,
      status, 
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('low');
    setAssignee('');
    setStatus('inProgress');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6">Add Task</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">
            Due Date:
          </label>
          <input
            id="dueDate"
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
            Priority:
          </label>
          <select
            id="priority"
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assignee">
            Assignee:
          </label>
          <input
            id="assignee"
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Status:
          </label>
          <select
            id="status"
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="mb-4">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
