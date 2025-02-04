import React from 'react';
import './SeminarItem.css'; // Импортируем CSS файл

function SeminarItem({ seminar, onEdit, onDelete }) {
  return (
    <li className="seminar-item">
      <div className="seminar-image">
        <img src={seminar.photo} alt={seminar.title} />
      </div>
      <div className="seminar-details">
        <h3 className="seminar-title">{seminar.title}</h3>
        <p className="seminar-date">{seminar.date}</p>
        <p className="seminar-description">{seminar.description}</p>
        <div className="seminar-actions">
          <button onClick={() => onEdit(seminar)}>Редактировать</button>
          <button onClick={() => onDelete(seminar.id)}>Удалить</button>
        </div>
      </div>
    </li>
  );
}

export default SeminarItem;