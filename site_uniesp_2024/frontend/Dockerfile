# Etapa de build
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa para servir os arquivos
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Remove o arquivo de configuração padrão e usa o seu (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
