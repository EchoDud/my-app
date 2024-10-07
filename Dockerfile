# Используем образ с Node.js LTS на базе Alpine
FROM node:lts-alpine

# Устанавливаем Angular CLI глобально
RUN npm install -g @angular/cli

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем файлы для установки зависимостей
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Устанавливаем все зависимости, включая devDependencies
RUN npm install --silent

# Копируем остальные файлы проекта
COPY . .

# Открываем порт 4200, используемый Angular CLI
EXPOSE 4200

# Меняем права на директорию приложения (если нужно)
RUN chown -R node /usr/src/app

# Переходим на пользователя node (если нужно)
USER node

# Запускаем Angular приложение
CMD ["npm", "start"]
