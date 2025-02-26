import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import "./TaskCard.css";
import Tag from "./Tag";

const TaskCard = ({ title, tags, handleDelete, index }) => {
    return (
        <article className='task_card'>
            <p className='task_text'>{title}</p>

            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    {tags.map((tag, index) => (
                        <Tag key={index} tagName={tag} selected />
                    ))}
                </div>
                <div
                    className='task_delete'
                    onClick={() => handleDelete(index)}>
                    <FontAwesomeIcon icon={faTrash} className='delete_icon' />
                </div>
            </div>
        </article>
    );
};

export default TaskCard;
