// src/components/EditModal.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditModal from './EditModal';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Укажите элемент приложения для react-modal

const mockOnRequestClose = jest.fn();

test('renders modal with seminar data', () => {
  const seminar = {
    id: 1,
    title: 'Тестовый семинар',
    description: 'Описание тестового семинара',
    date: '01.01.2025',
    time: '10:00',
  };

  render(
    <EditModal
      isOpen={true}
      onRequestClose={mockOnRequestClose}
      currentSeminar={seminar}
      onUpdate={jest.fn()}
    />
  );

  expect(screen.getByPlaceholderText(/название/i)).toHaveValue(seminar.title);
  expect(screen.getByPlaceholderText(/описание/i)).toHaveValue(seminar.description);
});

test('updates seminar data on input change', () => {
  const seminar = {
    id: 1,
    title: 'Тестовый семинар',
    description: 'Описание тестового семинара',
    date: '01.01.2025',
    time: '10:00',
  };

  render(
    <EditModal
      isOpen={true}
      onRequestClose={mockOnRequestClose}
      currentSeminar={seminar}
      onUpdate={jest.fn()}
    />
  );

  fireEvent.change(screen.getByPlaceholderText(/название/i), { target: { value: 'Измененный семинар' } });
  expect(screen.getByPlaceholderText(/название/i)).toHaveValue('Измененный семинар');
});

test('calls onUpdate when save button is clicked', () => {
  const seminar = {
    id: 1,
    title: 'Тестовый семинар',
    description: 'Описание тестового семинара',
    date: '01.01.2025',
    time: '10:00',
  };

  const mockOnUpdate = jest.fn();

  render(
    <EditModal
      isOpen={true}
      onRequestClose={mockOnRequestClose}
      currentSeminar={seminar}
      onUpdate={mockOnUpdate}
    />
  );

  fireEvent.change(screen.getByPlaceholderText(/название/i), { target: { value: 'Измененный семинар' } });
  fireEvent.click(screen.getByText(/сохранить/i));

  expect(mockOnUpdate).toHaveBeenCalledWith({
    ...seminar,
    title: 'Измененный семинар',
  });
});
