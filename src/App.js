import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from './TodoList.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); 

  const handleAddTodo = () => {
    if (todoName.trim() !== '' && todoDescription.trim() !== '') {
      const newTodo = {
        name: todoName,
        description: todoDescription,
        completed: false 
      };
      setTodos([...todos, newTodo]);
      setTodoName('');
      setTodoDescription('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleStatusFilterChange = (selectedStatus) => {
    setStatusFilter(selectedStatus);
  };

  const filteredTodos = todos.filter(todo => {
    if (statusFilter === 'all') {
      return true;
    } else if (statusFilter === 'completed') {
      return todo.completed;
    } else if (statusFilter === 'not completed') {
      return !todo.completed;
    }
    return true;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="text-center">
          <h2>My Todo</h2>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Todo Name"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Todo Description"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={handleAddTodo}>Add Todo</button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h6>My Todos</h6>
        </div>
        <div className="col-2">
          <h5>Status Filter</h5>
          <select
            className="form-control"
            value={statusFilter}
            onChange={(e) => handleStatusFilterChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </div>
      </div>

      <TodoList todos={filteredTodos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
