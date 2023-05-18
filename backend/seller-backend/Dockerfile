FROM node:18.14.2

WORKDIR /app/backend/seller-backend

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGODB_URL = mongodb+srv://ashanidewmini33:ashaniras123@clusterseller.qby6lu4.mongodb.net/seller_db?retryWrites=true&w=majority

EXPOSE 8003

CMD ["npm", "start"]