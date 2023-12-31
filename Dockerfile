FROM node:16-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

RUN npm run build
# Serve Application using Nginx Server
FROM nginx:latest AS ngi
COPY --from=build /app/dist/fe-demolibrary/ /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
