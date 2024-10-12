import React from 'react';
import './History.css'; // Import the CSS file for styling
import { FaHistory, FaTrashAlt } from 'react-icons/fa'; // Import icons from react-icons

const historyData = [
  { id: 1, title: 'Disease Detection: Tomato', date: '2024-10-01', status: 'Detected' },
  { id: 2, title: 'Disease Detection: Apple', date: '2024-09-28', status: 'Healthy' },
  { id: 3, title: 'Disease Detection: Rice', date: '2024-09-15', status: 'Detected' },
  { id: 4, title: 'Disease Detection: Wheat', date: '2024-09-10', status: 'Detected' },
];

const History = () => {
  const handleDelete = (id) => {
    // Logic to delete the history entry
    alert(`Delete history entry with ID: ${id}`); // Replace with actual delete logic
  };

  return (
    <div className="history-page">
      <h1 className="history-title">
        <FaHistory className="history-icon" /> History
      </h1>
      <div className="history-list">
        {historyData.map((entry) => (
          <div key={entry.id} className="history-item">
            <div className="history-info">
              <h2 className="history-item-title">{entry.title}</h2>
              <p className="history-item-date">{entry.date}</p>
              <span className={`history-item-status ${entry.status.toLowerCase()}`}>
                {entry.status}
              </span>
            </div>
            <button className="delete-button" onClick={() => handleDelete(entry.id)}>
              <FaTrashAlt className="delete-icon" /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
