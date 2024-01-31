import React, { useState } from 'react';
import EditCard from './EditCard.jsx';

function Card({ name, description, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState('not completed');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (editedName, editedDescription) => {
    
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete(); 
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <EditCard
          initialName={name}
          initialDescription={description}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <div className="col-3 card">
          <div className="task">
            <h6>Name: {name}</h6>
          </div>
          <div className="description">
            <h6>Description: {description}</h6>
          </div>
          <div>
            <label>Status:</label>
            <select value={status} onChange={handleStatusChange}>
              <option value="not completed">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className='row'>
            <div className='col-6'>
              <button onClick={handleEditClick}>Edit</button>
            </div>
            <div className='col-6'>
              <button onClick={handleDeleteClick}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
