import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const [color, setColor] = useState('#000000');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() && date && time) {
            addTask({ task, date, time, isImportant, color, isCompleted: false });
            setTask('');
            setDate('');
            setTime('');
            setIsImportant(false);
            setColor('#000000');
        }
    };

    return (
        <div class="form-container p-3">
            <form class="col p-2" onSubmit={handleSubmit}>
                <label>Type your task down below:</label>
                <input type="text" placeholder="Enter your task here..." value={task} onChange={(e) => setTask(e.target.value)} />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <button class="btn" type="submit">Add</button>
            </form>
        </div>

    )
}

export default ToDoForm;