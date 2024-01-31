import React, { useState } from 'react';

function EditCard({ initialName, initialDescription, onSave, onCancel }) {
  const [editedName, setEditedName] = useState(initialName);
  const [editedDescription, setEditedDescription] = useState(initialDescription);

  const handleSave = () => {
    onSave(editedName, editedDescription);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="col-3 card">
      <div className="task">
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      </div>
      <div className="description">
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      </div>
      <div className='row'>
        <div className='col-6'>
          <button onClick={handleSave}>Save</button>
        </div>
        <div className='col-6'>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditCard;
