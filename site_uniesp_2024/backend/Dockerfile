# Imagem base oficial do Node.js
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para dentro do container
COPY . .

# Expõe a porta que o backend vai rodar
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
