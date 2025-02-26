import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faClipboardList, faCog, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/directhit.webp";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="app">
      <header>
        <h1>Task Tracker</h1>
        <div className="dark-mode-toggle-container" onClick={toggleDarkMode}>
          <button className="dark-mode-toggle">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className={isDarkMode ? "fa-sun" : "fa-moon"} />
          </button>
        </div>
      </header>
      <main className="app_main">
        <TaskForm setTasks={setTasks} isDarkMode={isDarkMode} />
        <TaskColumn
          title="To do"
          icon={faClipboardList}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={faCog}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={faCheckCircle}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
