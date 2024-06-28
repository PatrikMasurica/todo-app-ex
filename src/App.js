import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/css/fma-general.css';
import './assets/css/fma-responsive.css';
import Header from './assets/components/Header';
import ToDoForm from './assets/components/ToDoForm';
import ToDoList from './assets/components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    filterTasks(filter);
  }, [tasks, filter]);

  const addTask = (task) => {
    setTasks([...tasks, task]);

  };

  const toggleCompleted = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasks(newTasks);
  };

  const filterTasks = (filterType) => {
    setFilter(filterType);
    const today = new Date();
    const yesterday = today.getDate() - 1;
    const tomorrow = today.getDate() + 1;

    const filtered = tasks.filter((task) => {
      const taskDate = new Date(task.date);
      if (filterType === 'yesterday') {
        return (
          taskDate.toDateString() === new Date(today.setDate(yesterday)).toDateString()
        );
      } else if (filterType === 'today') {
        return taskDate.toDateString() === today.toDateString();
      } else if (filterType === 'tomorrow') {
        return (
          taskDate.toDateString() === new Date(today.setDate(tomorrow)).toDateString()
        );
      } else {
        return true;
      }
    });
    setFilteredTasks(filtered);
  };

  return (
    <div className="App">
      <div class="container-fixed wrapper-full">
        <Header />
        <div class="row m-5 p-2 gap-10 just-start">
          <ToDoForm addTask={addTask} />
          <ToDoList tasks={filteredTasks.length ? filteredTasks : tasks} toggleCompleted={toggleCompleted} updateTask={updateTask} filterTasks={filterTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
