
## 📝 Planejamento do Projeto

Este projeto já existia anteriormente — uma aplicação full stack com:

- **Frontend:** React  
- **Backend:** Node.js + Express  
- **Banco de dados:** MongoDB  

A proposta aqui foi **dockerizar a aplicação**, organizando tudo com Docker e Docker Compose, para facilitar o uso e garantir funcionamento integrado e consistente entre os ambientes.

---

## 🔄 Organização do Trabalho

Dividimos o desenvolvimento em **3 sprints**, cada uma com foco em uma etapa específica:

1. **Sprint 1:** Preparar o backend para rodar em container.  
2. **Sprint 2:** Dockerizar o frontend.  
3. **Sprint 3:** Unir tudo com Docker Compose e testar a integração entre os serviços.

Cada sprint durou 1 semana, totalizando **3 semanas de desenvolvimento**.

---

## ⚙️ Metodologia Utilizada

Adotamos uma abordagem baseada no **Scrum**, mesmo em uma equipe pequena, para garantir organização e visibilidade no progresso semanal.

---

## 🧰 Ferramentas Utilizadas

- 🗂️ **GitHub** – versionamento do código  
- 📋 **Trello** – organização de tarefas e acompanhamento das sprints  
- 🖥️ **Visual Studio Code** – editor principal  
- 🐳 **Docker & Docker Compose** – containers e orquestração  
- 📮 **Insomnia** – testes de rotas do backend  
- 🍃 **MongoDB** – banco de dados

---

## 🚧 Principais Desafios

Durante o processo, enfrentamos alguns obstáculos importantes:

- **Transformação para Docker:** Ajustes na estrutura, criação dos Dockerfile e configuração do docker-compose.yml.
- **Conexão backend <-> MongoDB:** Inicialmente complicada, resolvida com configuração correta da URL e uso de rede Docker personalizada.
- **Chamadas no frontend:** Precisamos adaptar as URLs para usar os nomes dos containers definidos no Compose.
- **Persistência dos dados:** Foi necessário configurar um **volume persistente** para o MongoDB.
