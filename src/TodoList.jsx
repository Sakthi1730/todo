import React from 'react';
import Card from './card.jsx';

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="col-12">
      <div className="row">
        {todos.map((todo, index) => (
          <Card key={index} name={todo.name} description={todo.description} onDelete={() => onDelete(index)} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
