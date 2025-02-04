// src/components/Seminars.js
import React, { useEffect, useState } from 'react';
import EditModal from './EditModal';
import './seminars.css';

const Seminars = () => {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSeminar, setCurrentSeminar] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const fetchSeminars = async () => {
      try {
        const response = await fetch('http://localhost:5000/seminars');
        if (!response.ok) throw new Error('Ошибка при загрузке данных');
        const data = await response.json();
        setSeminars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSeminars();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить семинар?')) {
      try {
        await fetch(`http://localhost:5000/seminars/${id}`, { method: 'DELETE' });
        setSeminars(seminars.filter(seminar => seminar.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleEdit = (seminar) => {
    setCurrentSeminar(seminar);
    setIsEditing(true);
  };

  const handleUpdate = async (updatedSeminar) => {
    try {
      await fetch(`http://localhost:5000/seminars/${updatedSeminar.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSeminar),
      });
      setSeminars(seminars.map(seminar => seminar.id === updatedSeminar.id ? updatedSeminar : seminar));
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggleTheme}>
        Переключить тему
      </button>
      <h1>Список семинаров</h1>
      <div className="seminar-list">
        {seminars.map(seminar => (
          <div className="seminar-item" key={seminar.id}>
            <h2>{seminar.title}</h2>
            <p>{seminar.description}</p>
            <p>{seminar.date} в {seminar.time}</p>
            <img src={seminar.photo} alt={seminar.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <button className="delete-button" onClick={() => handleDelete(seminar.id)}>
              <i className="fa fa-trash"></i> Удалить
            </button>
            <button className="edit-button" onClick={() => handleEdit(seminar)}>
              <i className="fa fa-pencil"></i> Редактировать
            </button>
          </div>
        ))}
      </div>
      <EditModal 
        isOpen={isEditing} 
        onRequestClose={() => setIsEditing(false)} 
        currentSeminar={currentSeminar} 
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default Seminars;
