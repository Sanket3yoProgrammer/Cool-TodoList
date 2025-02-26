import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCog, faCheckCircle, faFrown } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use and the frown icon

import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
    const iconClass = status === "todo" ? "icon-todo" : status === "doing" ? "icon-doing" : "icon-done";
    const animationClass = icon === faCog ? "animated-icon spin" : "animated-icon bounce"; // Apply spin to faCog and bounce to others

    // Filter tasks based on the current status
    const filteredTasks = tasks.filter(task => task.status === status);

    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <FontAwesomeIcon className={`task_column_icon ${animationClass} ${iconClass}`} icon={icon} alt='' /> {title}
            </h2>

            {filteredTasks.length === 0 ? (
                <div className="no-tasks">
                    <FontAwesomeIcon icon={faFrown} className="no-tasks-icon" />
                    <p>No tasks</p>
                </div>
            ) : (
                filteredTasks.map((task, index) => (
                    <TaskCard
                        key={index}
                        title={task.task}
                        tags={task.tags}
                        handleDelete={() => handleDelete(tasks.findIndex(t => t === task))}
                        index={index}
                    />
                ))
            )}
        </section>
    );
};

export default TaskColumn;
