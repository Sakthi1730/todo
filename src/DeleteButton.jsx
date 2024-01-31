import React from 'react';

function DeleteButton({ onDelete }) {
  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <button onClick={handleDeleteClick}>Delete</button>
  );
}

export default DeleteButton;
