# Estágio 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Nginx (Produção)
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
# O caminho abaixo foi corrigido para bater com seu angular.json
COPY --from=build /app/dist/projeto-forms /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]