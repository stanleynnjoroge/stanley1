# syntax=docker/dockerfile:1
FROM node:20 AS build
WORKDIR /app

RUN apt-get update && apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

RUN npm install cypress
COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm start & sleep 3000 & npx cypress run --spec 'cypress/e2e/**/*'"]
