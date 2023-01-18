FROM node:16.15.0-alpine
# ターミナル入力したことはdockerfileに書いた方が良いか?
# RUN npm install firebase@8.*
RUN mkdir /react-todo-pwa
WORKDIR /react-todo-pwa
