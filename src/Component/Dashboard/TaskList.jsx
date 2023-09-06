import React from 'react';

function TaskList({ tasks, updateTaskStatus, deleteTask }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white shadow-md shadow-gray-500 rounded-lg p-4">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{task.description}</p>
          <p className="text-sm text-gray-600">Due Date: {task.dueDate}</p>
          <p className="text-sm text-gray-600">Priority: {task.priority}</p>
          <p className="text-sm text-gray-600">Assignee: {task.assignee}</p>
          <p className={`text-sm font-semibold ${task.status === 'completed' ? 'text-green-600' : 'text-blue-600'}`}>
            Status: {task.status}
          </p>
          <div className="mt-2">
            <button
              onClick={() => updateTaskStatus(task.id)}
              className={`px-2 py-1 bg-${task.status === 'completed' ? 'blue' : 'green'}-500 text-white rounded-md mr-2`}
            >
              {task.status === 'completed' ? 'Mark In Progress' : 'Mark Completed'}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-2 py-1 bg-red-500 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
