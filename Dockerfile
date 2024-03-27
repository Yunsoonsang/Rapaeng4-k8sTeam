# 리액트 build하기
FROM node:16.20.2 AS build

WORKDIR /app

COPY ./app/package*.json .
RUN npm install

COPY ./app .
RUN npm run build

# 리액트 production하기
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
