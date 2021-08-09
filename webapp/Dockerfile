FROM node:16.6.1-slim as build
COPY package.json package-lock.json ./

RUN npm i -g @angular/cli && npm ci && mkdir /webapp && mv ./node_modules ./webapp

WORKDIR /webapp
COPY . .
RUN npm run build-prod

FROM nginx:1.21.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /webapp/dist/webapp /usr/share/nginx/html