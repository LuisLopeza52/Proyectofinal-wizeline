FROM node:18-alpine as deps 
WORKDIR /app 
 
COPY package*.json ./ 
 
RUN npm install 
 
COPY . . 
 
EXPOSE 3000 
 
CMD ["node","index.js"]