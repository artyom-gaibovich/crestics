# ✨ Crestics (Крестики-Нолики) на React + Redux Toolkit (разбор игры с ученикомn)

Игра "Крестики-Нолики", реализованная на современном стеке: **React**, **TypeScript**, и **Redux Toolkit**. Легкая, красивая и архитектурно чистая реализация с акцентом на масштабируемость и читаемость кода.

## 🧠 Особенности

- ♻️ Архитектура по принципу Smart / Dumb Components
- 🧩 Управление состоянием через Redux Toolkit
- 🔁 Поддержка серии игр с подсчетом побед
- 🚀 TypeScript типизация
- 🎯 Чистый UI без лишнего — легко стилизовать под свой дизайн

## 📦 Стек технологий

- React
- Redux Toolkit
- TypeScript




## 🚀 Запуск через npm

```bash


## Установка и запуск через npm 
npm i

## Запуск приложения в режиме разработки
npm run dev


````

## Запуск через Docker и Makefile

### Подготовка

Убедитесь, что у вас установлены:

* [Docker](https://docs.docker.com/get-docker/)
* [Make](https://www.gnu.org/software/make/)

### Команды Makefile

* Запуск локально:

```bash
make start
```

* Сборка Docker-образа:

```bash
make docker-build
```

* Запуск контейнера:

```bash
make docker-run
```

* Полная пересборка и запуск в Docker:

```bash
make docker-rebuild
```

* Остановка и удаление контейнера:

```bash
make docker-stop
```

### Запуск с помощью docker-compose

```bash
docker-compose up --build
```

После запуска приложение будет доступно по адресу: [http://localhost:5173](http://localhost:5173)

---


