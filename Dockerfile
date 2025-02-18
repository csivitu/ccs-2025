FROM node:lts-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY .  .

RUN npm run build

ENV HOSTNAME="0.0.0.0"

CMD npm run start


