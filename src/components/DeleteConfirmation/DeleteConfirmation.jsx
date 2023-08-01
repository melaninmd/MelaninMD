import React from 'react';
import './DeleteConfirmation.css'

const DeleteConfirmation = ({ onCancel, onConfirm }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <p id='popup-words'>Are you sure you want to delete this item?</p>
        <div className="buttons">
          <button id="cancel" className="popup-btn" onClick={onCancel}>Cancel</button>
          <button id="delete" className="popup-btn" onClick={onConfirm}>Yes, delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;