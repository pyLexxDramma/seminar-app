// src/components/EditModal.js
import React from 'react';
import Modal from 'react-modal';

const EditModal = ({ isOpen, onRequestClose, currentSeminar, onUpdate }) => {
  const [title, setTitle] = React.useState(currentSeminar?.title || '');
  const [description, setDescription] = React.useState(currentSeminar?.description || '');
  const [date, setDate] = React.useState(currentSeminar?.date || '');
  const [time, setTime] = React.useState(currentSeminar?.time || '');

  React.useEffect(() => {
    if (currentSeminar) {
      setTitle(currentSeminar.title);
      setDescription(currentSeminar.description);
      setDate(currentSeminar.date);
      setTime(currentSeminar.time);
    }
  }, [currentSeminar]);

  const handleSave = () => {
    const updatedSeminar = { ...currentSeminar, title, description, date, time };
    onUpdate(updatedSeminar);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Редактировать семинар</h2>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Дата"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Время"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleSave}>Сохранить</button>
      <button onClick={onRequestClose}>Закрыть</button>
    </Modal>
  );
};

export default EditModal;
