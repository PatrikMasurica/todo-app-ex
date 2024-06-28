import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleCompleted, updateTask, filterTasks }) => {
    return (
        <div class="col left-shadow p-4">
            <h1>Tasks:</h1>
            <hr />
            <div class="m-0">
                <button onClick={() => filterTasks('yesterday')} class="btn right-shadow">Yesterday</button>
                <button onClick={() => filterTasks('today')} class="btn right-shadow">Today</button>
                <button onClick={() => filterTasks('tomorrow')} class="btn right-shadow">Tomorrow</button>
                <button onClick={() => filterTasks('all')} class="btn right-shadow">All</button>
            </div>
            <div class='col just-between'>
                <h3>First Task</h3>
                <ul>
                    {tasks.map((task, index) => (
                        <ToDoItem
                            key={index}
                            task={task}
                            index={index}
                            toggleCompleted={toggleCompleted}
                            updateTask={updateTask}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList