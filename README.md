# Seminar App

Приложение для управления семинарами, разработанное в качестве демонстрации навыков работы с React и взаимодействия с API. В этом проекте используется React для пользовательского интерфейса и json-server для имитации серверного API.

**Основные функции:**

*   **Отображение семинаров:**
    *   Получает данные о семинарах из API-endpoint json-server.
    *   Отображает список элементов семинаров, каждый из которых показывает название, дату, описание и изображение (если доступно).
    *   Реализует адаптивные стили для оптимального просмотра на различных размерах экрана.
*   **Редактирование семинаров:**
    *   Предоставляет кнопку "Редактировать" для каждого семинара, которая открывает модальное окно.
    *   Модальное окно включает поля ввода для редактирования названия семинара, описания, даты, времени и URL-адреса фотографии.
    *   Использует управляемые компоненты для управления значениями полей формы.
    *   Отправляет PUT-запрос к API json-server для обновления данных семинара.
    *   Отображает визуальную обратную связь (например, сообщение об успешном выполнении или индикатор загрузки) во время процесса обновления.
*   **Удаление семинаров:**
    *   Включает кнопку "Удалить" для каждого семинара.
    *   Отображает диалоговое окно подтверждения перед удалением семинара.
    *   Отправляет DELETE-запрос к API json-server для удаления семинара.
    *   Обновляет пользовательский интерфейс, чтобы отразить удаленный семинар.
*   **Хранение данных:**
    *   Использует `json-server` для предоставления простого REST API с данными, хранящимися в файле `db.json`.
    *   Включает файл `db.json` в репозиторий с образцами данных о семинарах.

**Использованные технологии:**

*   React (JavaScript-библиотека для создания пользовательских интерфейсов)
*   json-server (Фейковый REST API для прототипирования и тестирования)
*   CSS (для стилизации)

**Этот проект демонстрирует:**

*   Структуру компонентов React и управление состоянием
*   Получение данных из API с использованием `fetch`
*   Обработку ввода данных формы и обновлений
*   Реализацию операций CRUD (Create, Read, Update, Delete)
*   Основные принципы стилизации и адаптивного дизайнаъ
  
**Проведенные тесты**
Проект включает в себя модульные тесты, написанные с использованием библиотеки @testing-library/react для тестирования компонентов. 
Тесты проверяют следующие функции:

Семинары:

- Проверка успешной загрузки семинаров и их отображения.
- Проверка корректного удаления семинара.
- Проверка открытия модального окна редактирования семинара.
- Проверка обновления данных семинара.

Модальное окно:

- Проверка отображения данных семинара в модальном окне.
- Проверка обновления данных в полях ввода.
- Проверка закрытия модального окна.
- Тесты запускаются с помощью команды:

npm test

- Примечания:

- Убедитесь, что json-server запущен перед запуском приложения, чтобы избежать ошибок при загрузке данных.
- Для корректной работы модального окна необходимо установить Modal.setAppElement('#root') в index.js, чтобы указать элемент приложения, что улучшает доступность.
