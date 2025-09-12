# RPGMaster

## Descrição

RPGMaster é uma API RESTful robusta e escalável, projetada para servir como o backend para aplicações de gerenciamento de campanhas de RPG de mesa. Construída com o framework NestJS, a API oferece uma base sólida para o desenvolvimento de funcionalidades complexas, como criação de personagens, gerenciamento de sessões de jogo e automação de regras.

## Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)**: Um framework progressivo de Node.js para construir aplicações de servidor eficientes e escaláveis.
- **[TypeScript](https://www.typescriptlang.org/)**: Um superconjunto de JavaScript que adiciona tipagem estática opcional.
- **[TypeORM](https://typeorm.io/)**: Um ORM (Object-Relational Mapper) que suporta tanto o padrão Active Record quanto o Data Mapper, facilitando a interação com bancos de dados.
- **[PostgreSQL](https://www.postgresql.org/)**: Um sistema de gerenciamento de banco de dados objeto-relacional de código aberto, conhecido por sua robustez e conformidade com o padrão SQL.
- **[JWT (JSON Web Tokens)](https://jwt.io/)**: Um padrão aberto para criar tokens de acesso que afirmam um número de "claims" (alegações) entre duas partes.

## Funcionalidades

- **Autenticação de Usuários**: Sistema completo de registro e login com senhas criptografadas e autenticação baseada em JWT.
- **Gerenciamento de Usuários**: Operações de CRUD (Criar, Ler, Atualizar, Deletar) para usuários.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- **[Node.js](https://nodejs.org/)**: Versão 16 ou superior.
- **[NPM](https://www.npmjs.com/)**: Geralmente instalado junto com o Node.js.
- **[Docker](https://www.docker.com/)**: Opcional, mas recomendado para gerenciar o banco de dados PostgreSQL.

## Instalação e Configuração

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/rpgmaster.git
   cd rpgmaster/rpgmaster-server
   ```

2. **Instale as dependências:**

   Execute o comando abaixo para instalar todas as dependências do projeto.

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do diretório `rpgmaster-server`. Você pode copiar o arquivo `.env.example` (se existir) ou criar um novo com as seguintes variáveis:

   ```env
   # Configurações do Banco de Dados
   TYPEORM_HOST=localhost
   TYPEORM_PORT=5432
   TYPEORM_USERNAME=postgres
   TYPEORM_PASSWORD=admin
   TYPEORM_DATABASE=rpgmaster

   # Chave secreta para JWT
   JWT_SECRET=sua-chave-secreta-aqui
   ```

   **Nota:** Se você estiver usando Docker para o PostgreSQL, pode facilmente subir uma instância com as credenciais acima.

4. **Execute as migrações do banco de dados:**

   Para criar as tabelas e estruturas necessárias no banco de dados, execute o seguinte comando:

   ```bash
   npm run migration:run
   ```

## Executando a Aplicação

### Modo de Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com hot-reload, execute:

```bash
npm run start:dev
```

A aplicação estará disponível em `http://localhost:3000`.

### Modo de Produção

Para construir e iniciar a aplicação em modo de produção, use os seguintes comandos:

```bash
npm run build
npm run start:prod
```

## Executando os Testes

Para rodar os testes unitários e de integração, execute o comando:

```bash
npm run test
```

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
