# Описание
Это просто веб-приложение, написанное с использованием фреймворка Ехpress.js для Node.js.
Оно слушает порт 3000 и обрабатывает следующие маршруты и статические файлы:
1. / - корневой маршрут. При переходе по ссылке http://localhost:3000 приложение ответит сообщением: "Hello, World!".
2. /about - маршрут about. При переходе по ссылке http://localhost:3000/about приложение ответит сообщением: "Это простое приложение на Express.js".
3. Статические файлы, содержащиеся в директории public. В данном случае эта директория содержит только файл index.html, при переходе по ссылке http://localhost:3000/index.html приложение ответит сообщением: "Добро пожаловать в простое приложение Express!"
4. Все прочие маршруты. При попытке перейти по ссылке, не содержащей вышеупомянутые маршруты (например http://localhost:3000/nonexistent) приложение ответит сообщением: "Страница не найдена"
# Инструкция по запуску:
1. Установите Node.js, если у вас его еще нет: https://nodejs.org/.
2. Клонируйте данный репозиторий следующей командой: git clone https://github.com/Dmitry145/TestNode.git.
3. В терминале перейдите в директорию проекта: cd TestNode.
4. Запустите приложение командой: node app.js.
5. Для доступа к приложению откройте в вашем браузере одну из приведенных в описании ссылок.
