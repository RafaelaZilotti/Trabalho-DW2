# WhatsHub - Gerador de Links e Agenda de contatos

## Aceso a Aplicação

**Aplicação hospedada**

[![Netlify Status](https://api.netlify.com/api/v1/badges/fface676-36eb-4aa6-a92e-9ce26617b222/deploy-status)](https://app.netlify.com/projects/eclectic-zabaione-294488/deploys)

---

## Sobre o projeto

O **WhatsHub** é uma aplicação web desenvolvida em **React.js** com integração ao **Supabase**, criada para facilitar o envio de mensagens via WhatsApp e o gerenciamento de contatos pessoais.

O sistema permite:
- Gerar **links automáticos** de conversa no WhatsApp.  
- Criar e gerenciar uma **agenda de contatos** pessoal.  
- Editar e excluir contatos diretamente no banco de dados.  
- Cada usuário possui **seu próprio login** e **agenda individual**.  

> O projeto foi criado com o objetivo de simplificar o processo de iniciar conversas no WhatsApp, sem precisar salvar números manualmente, mantendo tudo organizado por usuário.

---

## Tecnologias Utilizadas

- **React.js (vite)** - Interface dinâmica e responsiva
- **Supabase** - Banco de dados e autenticação
- **CSS** - Estilizacao
- **Netify** - Hospedagem

---

## Como executar localmente

### 1. Clonar repositorio

```bash
git clone https://github.com/RafaelaZilotti/Trabalho-DW2
cd Whats
```

### 2. Instalar dependências

Ao colocar os códigos abaixo no terminal as dependências do react, supabase e do router serão instaladas

```bash
npm install
npm install @supabase/supabase-js
npm install react-router-dom
```

### 3. Criar o aquivo .env

Na raiz do projeto deve-se criar um arquivo .env com as variáveis de ambiente do supabase

``` .env
VITE_SUPABASE_URL=https://therxxqixnxbkhjqwpdz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZXJ4eHFpeG54YmtoanF3cGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMDExMDIsImV4cCI6MjA3Mzg3NzEwMn0.ek9K0WOPR5sSo6-EhE8IWmH3-WYgr5OYaEkZaIC0TsQ
```

### 4. Rodar o projeto

Ao enviar o código abaixo no terminal o aplicativo estará disponível no link fornecido

```bash
npm run dev
```

---

## Funcionalidade extra

### Login com Supabase Auth

A aplicação conta com sistema de autenticação de usuários, desenvolvido com o Supabase Auth.
Cada usuário pode criar uma conta (email e senha) e fazer login.
O Supabase retorna um objeto user contendo o ID único do usuário logado (user.id).

Esse ID é usado para relacionar cada contato a um usuário específico no banco de dados.

### Agenda individual

A agenda de contatos é exclusiva para cada usuário logado.
Assim ao usuário abrir a aplicação ele só verá seus próprios contatos, que são atrelados ao id de usuário

### Motivo da implementação

Foi feito estas implementações com o objetivo de fornecer privacidade para os dados de cada usuário e criar uma periência personalizada para cada indivíduo.

---

## Criadoras do Projeto

- Daniela Rodler Cordeiro
- Rafaela Zilotti da Silva