FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3011

ENV PORT=3011

CMD ["node", "src/index.js"]
