# CRUD em Node.js com Express e Typescript

Este projeto implementa um **CRUD (Create, Read, Update, Delete)** utilizando **Node.js** com a biblioteca **Express**, **Typescript** e validação de requisições com o **ZOD**. Os dados são armazenados em um arquivo JSON local (`data/db.json`), simulando um banco de dados.

---

## 📦 Requisitos obrigatórios

- Node.js (v18 ou superior)

---

## 🚀 Instalação

```bash
0 - Clone/Baixe o projeto para seu computador.
Exemplo: git clone https://github.com/AndreyMateus/crud-users-node-express-typescript

1 - Entre na pasta do Projeto VIA CLI(TERMINAL).
Exemplo: cd crud-users-node-express-typescript

2 - Instale as dependências (node_modules)
Exemplo: npm install

3 - Rode o projeto.
`npm run dev`

4 - acesse através do link gerado pelo terminal ou pelo Postman/Httpie ou outro.

```

## Rotas

| Método | Rota         | Descrição                     |
| ------ | ------------ | ------------------------------|
| GET    | `/users`     | Lista todos os usuários       |
| GET    | `/users:id`  | Lista um usuário pelo id      |
| POST   | `/users`     | Cria um novo usuário          |
| PUT    | `/users/:id` | Atualiza um usuário existente |
| DELETE | `/users/:id` | Remove um usuário existente   |

---

## Formato de dado do usuário

```
{
    "id": 1748447816309,
    "name": "Lumia",
    "cpf": "162.170.797-26",
    "cellphone": "21 981132254",
    "address": {
      "city": "Rio de Janeiro",
      "streetName": "Centro",
      "district": "Centro",
      "numberHouse": 222
    }
  }
```

---

## Arquitetura do CRUD

O projeto está estruturado de acordo com as boas práticas de organização, seguindo a divisão de responsabilidades em cada pasta:

---

### **controllers**

Pasta responsável por centralizar a lógica de controle. Aqui são implementadas as funções que recebem as requisições, processam os dados (com auxílio das models) e retornam as respostas adequadas.

---

### **data**

Pasta destinada ao gerenciamento da camada de persistência de dados.

✅ Contém:

- Um **arquivo JSON** que simula o banco de dados.
- A **classe `Data`**, responsável por simular as operações com esses dados, funcionando como uma camada de abstração do "banco".

---

### **interfaces**

Pasta onde ficam definidas as **interfaces e tipos** utilizados no projeto, garantindo maior segurança e padronização no tratamento de dados, especialmente em projetos com TypeScript.

---

### **middlewares**

Pasta destinada a funções intermediárias que **interceptam e processam as requisições** antes que elas cheguem aos controllers, como validação de dados.

---

### **models**

Pasta responsável por definir as **estruturas dos dados**, geralmente correspondendo às tabelas ou coleções do banco de dados. Contém classes.

---

### **routes**

Pasta onde são definidas as **rotas da aplicação**, mapeando os endpoints e associando-os aos respectivos controllers.

    index.ts:
    - É o arquivo principal de gerenciamento de Rotas X Controllers

---

### **utils**

Pasta destinada a **funções e classes auxiliares e utilitárias** que podem ser reutilizadas em diferentes partes do projeto.

✅ Contém:

- A **classe `AppError`**, utilizada para padronizar o tratamento de erros na aplicação, facilitando o envio de mensagens de erro consistentes.

---

## Bibliotecas usadas (Dependências)

- Express
- Zod

## Bibliotecas usadas (Dev Dependências)

- @types/express
- tsx
- typescript
