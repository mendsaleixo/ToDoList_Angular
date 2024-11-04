# 📚 ToDo List - Projeto Angular

Este é o projeto final do módulo de Angular I, uma aplicação de lista de tarefas (ToDo List) que permite adicionar, editar, visualizar e remover tarefas. A aplicação foi desenvolvida usando Angular e Bootstrap.

## 📝 Descrição do Projeto

O objetivo deste projeto é aplicar os conceitos para criar uma aplicação funcional, onde o usuário pode:
- Adicionar uma nova tarefa
- Editar uma tarefa existente
- Deletar uma tarefa
- Visualizar todas as tarefas salvas

Além disso, a aplicação exibe a data e a hora atualizadas automaticamente e realiza validações nos formulários de criação e edição de tarefas.

## ⚙️ Funcionalidades

- **Adicionar Tarefa**: O usuário pode adicionar uma tarefa com título, descrição, data de conclusão e status.
- **Editar Tarefa**: Permite editar uma tarefa existente.
- **Remover Tarefa**: Possibilidade de remover uma tarefa salva.
- **Listar Tarefas**: Todas as tarefas são exibidas em uma lista.
- **Validações**: Validação nos campos do formulário para garantir dados obrigatórios e corretos.
- **Data e Hora Atualizadas**: A data e a hora são exibidas no cabeçalho e atualizadas a cada minuto.

## 📝 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 16 ou superior)
- **Angular CLI** (versão 16 ou superior)
- 
## ⚙️ Configuração do Projeto


1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/mendsaleixo/ToDoList_Angular.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd .\todo-list-angular
   ```
   

3. Instale o Node.js:
   [Download do Node.js](https://nodejs.org/en/download/)

4. Instale a Angular CLI:

   ```bash
   npm i -g @angular/cli@16
   ```

4. Instale dependencias do projeto:

   ```bash
   cd .\todo-list-angular
   ```
   
6. Instale o Bootstrap no projeto:

   ```bash
   npm install bootstrap
   ```

7. No arquivo `angular.json`, adicione a referência aos paths das bibliotecas instaladas:

   ```json
   "styles": [
     "node_modules/bootstrap/scss/bootstrap.scss",
     "src/styles.scss"
   ],
   "scripts": [
     "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
   ]
   ```

8. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

## 📝 Estrutura do Projeto

A estrutura principal do projeto é composta pelos seguintes componentes e serviços:

- **HeaderComponent**: Exibe a data e a hora atualizadas a cada minuto.
- **TodoListComponent**: Lista as tarefas salvas com opções para editar e deletar.
- **TodoFormComponent**: Formulário para adicionar e editar tarefas com validações.

## 🛠️ Tecnologias Utilizadas

- **Angular**: Framework principal para desenvolvimento da aplicação.
- **Bootstrap**: Framework CSS para estilização.
- **HTML5 e CSS3**: Estrutura e estilo básico da aplicação.

## 👩‍💻 Desenvolvedores 

Desenvolvido com 💚 por **Equipe 02**: Mendelson Aleixo, Maria Eduarda Castro, Larissa Rezende, Viviane Balbino, Yago Capistrano.
