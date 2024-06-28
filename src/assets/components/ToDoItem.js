import React, { useState } from 'react';

const ToDoItem = ({ task, index, toggleCompleted, updateTask }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.task);
    const [editedDate, setEditedDate] = useState(task.date);
    const [editedTime, setEditedTime] = useState(task.time);
    const [editedIsImportant, setEditedIsImportant] = useState(task.isImportant);
    const [editedColor, setEditedColor] = useState(task.color);

    const handleSave = () => {
        updateTask(index, {
            task: editedTask,
            date: editedDate,
            time: editedTime,
            isImportant: editedIsImportant,
            color: editedColor,
            isCompleted: task.isCompleted,
        });
        setIsEditing(false);
    };

    return (
        <li style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', color: task.color }}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <input
                        type="date"
                        value={editedDate}
                        onChange={(e) => setEditedDate(e.target.value)}
                    />
                    <input
                        type="time"
                        value={editedTime}
                        onChange={(e) => setEditedTime(e.target.value)}
                    />
                    <label>
                        Important
                        <input
                            type="checkbox"
                            checked={editedIsImportant}
                            onChange={(e) => setEditedIsImportant(e.target.checked)}
                        />
                    </label>
                    <input
                        type="color"
                        value={editedColor}
                        onChange={(e) => setEditedColor(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    {task.task} - {task.date} {task.time}
                    {task.isImportant && <strong> (Important) </strong>}
                    <button onClick={() => toggleCompleted(index)}>
                        E
                    </button>
                    <button onClick={() => setIsEditing(true)}>
                        X
                    </button>
                </div>
            )}
        </li>
    );
};

export default ToDoItem;
