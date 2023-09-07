import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("dueDate");
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [isTaskListVisible, setIsTaskListVisible] = useState(true);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const [isCreatingTeam, setIsCreatingTeam] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [teams, setTeams] = useState(() => {
    const savedTeams = localStorage.getItem("teams");
    return savedTeams ? JSON.parse(savedTeams) : [];
  });

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  const toggleSection = (section) => {
    if (section === "addTask") {
      setIsAddingTask(!isAddingTask);
      setIsTaskListVisible(false);
      setIsFilterVisible(false);
    } else if (section === "taskList") {
      setIsAddingTask(false);
      setIsTaskListVisible(!isTaskListVisible);
      setIsFilterVisible(false);
    } else if (section === "filterOptions") {
      setIsAddingTask(false);
      setIsTaskListVisible(false);
      setIsFilterVisible(!isFilterVisible);
    }
  };

  useEffect(() => {
    const filteredAndSortedTasks = tasks
      .filter((task) => {
        if (filter === "all") {
          return true;
        } else if (filter === "completed") {
          return task.status === "completed";
        } else {
          return task.status === "inProgress";
        }
      })
      .sort((taskA, taskB) => {
        if (sortBy === "dueDate") {
          return new Date(taskA.dueDate) - new Date(taskB.dueDate);
        } else {
          const priorityOrder = { low: 1, medium: 2, high: 3 };
          return priorityOrder[taskA.priority] - priorityOrder[taskB.priority];
        }
      });

    setFilteredTasks(filteredAndSortedTasks);
  }, [tasks, filter, sortBy]);

  const handleTaskCreate = (newTask) => {
    newTask.id = Date.now().toString();
    setTasks([...tasks, newTask]);
    setIsAddingTask(false);
  };

  const updateTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.status = task.status === "inProgress" ? "completed" : "inProgress";
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTeamForm = () => {
    setIsCreatingTeam(!isCreatingTeam);
  };

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleTeamMembersChange = (e) => {
    const members = e.target.value.split(",");
    setTeamMembers(members);
  };

  const createTeam = () => {
    const newTeam = {
      name: teamName,
      members: teamMembers,
    };

    setTeams([...teams, newTeam]);

    setTeamName("");
    setTeamMembers([]);
    setIsCreatingTeam(false);
  };


  useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [teams]);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-10 text-center">
        Task Management Dashboard
      </h1>

      {/* Display the list of teams */}
      <div className="mb-5">
        <h1 className="text-xl font-semibold mb-5 mt-8 text-center">
          List of Teams
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teams.map((team, index) => (
            <div key={index} className="bg-white rounded shadow p-4">
              <h2 className="text-xl font-semibold mb-2 text-blue-500">
                {team.name}
              </h2>
              <ul>
                {team.members.map((member, memberIndex) => (
                  <li key={memberIndex} className="text-gray-700">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
<hr className="mb-5 mt-5" />
      {/* Dashboard Button section here  */}

      <div className="mb-5">
        <button
          onClick={toggleTeamForm}
          className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded shadow-md focus:outline-none"
        >
          {isCreatingTeam ? "Cancel Team Creation" : "Create a Team"}
        </button>
      </div>

      {/* Display the team creation form when the button is clicked */}
      {isCreatingTeam && (
        <div className="mb-5">
          <h1 className="text-xl font-semibold mb-5 mt-8 text-center">
            Team Creation Form
          </h1>
          <div className="mb-3">
            <label className="block font-semibold mb-2">Team Name:</label>
            <input
              type="text"
              value={teamName}
              onChange={handleTeamNameChange}
              className="border p-2 rounded shadow-md w-full"
            />
          </div>
          <div className="mb-3">
            <label className="block font-semibold mb-2">
              Team Members (comma-separated):
            </label>
            <input
              type="text"
              value={teamMembers.join(",")}
              onChange={handleTeamMembersChange}
              className="border p-2 rounded shadow-md w-full"
            />
          </div>
          <button
            onClick={createTeam}
            className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded shadow-md focus:outline-none"
          >
            Create Team
          </button>
        </div>
      )}

      <div className="lg:flex lg:flex-col">
        <div className="mb-5">
          <button
            onClick={() => toggleSection("addTask")}
            className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded shadow-md focus:outline-none"
          >
            {isAddingTask ? "X" : "Add Task"}
          </button>
        </div>

        {isAddingTask && (
          <div className="mb-5">
            <TaskForm addTask={handleTaskCreate} teamMembers={teamMembers}  teams={teams}/>
          </div>
        )}
      </div>

      <div className="lg:flex lg:flex-col mb-5">
        <div className="mb-2">
          <button
            onClick={() => toggleSection("taskList")}
            className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded shadow-md focus:outline-none"
          >
            {isTaskListVisible ? "X" : "Task List"}
          </button>
        </div>

        {isTaskListVisible && (
          <div>
            <h1 className="text-xl font-semibold mb-5 mt-8 text-center">
              Task List
            </h1>
            <TaskList
              tasks={tasks}
              updateTaskStatus={updateTaskStatus}
              deleteTask={deleteTask}
            />
          </div>
        )}
      </div>

      <div className="mb-5">
        <button
          onClick={() => toggleSection("filterOptions")}
          className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded shadow-md focus:outline-none"
        >
          {isFilterVisible ? "X" : "Filter Options"}
        </button>
      </div>

      {isFilterVisible && (
        <div className="mb-5">
          <div className="mb-5">
            <label className="block font-semibold mb-2">
              Filter by Status:
            </label>
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

          {/* Conditionally render filtered tasks */}
          <div className="mx-auto">
            <h1 className="text-xl font-semibold mb-5 mt-8 text-center">
              Filtered Tasks
            </h1>
            <TaskList
              tasks={filteredTasks}
              updateTaskStatus={updateTaskStatus}
              deleteTask={deleteTask}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
