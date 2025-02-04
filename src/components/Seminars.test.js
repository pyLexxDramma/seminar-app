// src/components/Seminars.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Seminars from './Seminars';

beforeEach(() => {
  fetch.resetMocks(); // Сбросим все моки перед каждым тестом
});

test('renders seminars after fetching', async () => {
  fetch.mockResponseOnce(JSON.stringify([
    {
      id: 1,
      title: 'Тестовый семинар',
      description: 'Описание тестового семинара',
      date: '01.01.2025',
      time: '10:00',
      photo: 'https://picsum.photos/id/1/750/730'
    }
  ]));

  render(<Seminars />);
  
  await waitFor(() => expect(screen.getByText(/Тестовый семинар/i)).toBeInTheDocument());
});

test('handles delete seminar', async () => {
  fetch.mockResponseOnce(JSON.stringify([
    {
      id: 1,
      title: 'Тестовый семинар',
      description: 'Описание тестового семинара',
      date: '01.01.2025',
      time: '10:00',
      photo: 'https://picsum.photos/id/1/750/730'
    }
  ]));

  render(<Seminars />);
  
  await waitFor(() => expect(screen.getByText(/Тестовый семинар/i)).toBeInTheDocument());

  // Удаляем семинар
  fetch.mockResponseOnce('', { status: 204 });
  window.confirm = jest.fn(() => true); // Подтверждаем удаление

  const deleteButton = screen.getByText(/удалить/i);
  deleteButton.click();

  await waitFor(() => expect(screen.queryByText(/Тестовый семинар/i)).not.toBeInTheDocument());
});
