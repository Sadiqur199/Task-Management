// TaskFilter.js
import React from 'react';

function TaskFilter({ filterTasks }) {
  const handleFilterChange = (e) => {
    const status = e.target.value;
    filterTasks(status);
  };

  return (
    <div>
      <label>Filter by Status:</label>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="inProgress">In Progress</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

export default TaskFilter;
