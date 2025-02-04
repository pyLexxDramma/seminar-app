import '@testing-library/jest-dom';
import Modal from 'react-modal';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();


// Создайте элемент #root для тестов
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

// Укажите элемент приложения для react-modal
Modal.setAppElement('#root');
