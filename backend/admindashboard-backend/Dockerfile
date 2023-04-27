FROM node:18.14.2

WORKDIR /app/backend/admindashboard-backend

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGODB_URL = mongodb+srv://maleeshaaa:maleesha2000@cluster0.jca3okn.mongodb.net/?retryWrites=true&w=majority

EXPOSE 5000

CMD ["npm", "start"]