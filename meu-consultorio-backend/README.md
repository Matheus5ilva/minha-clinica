# Meu Consultório - Backend

Este é o backend do sistema Meu Consultório, uma aplicação para gerenciamento de clínicas médicas.

## Tecnologias Utilizadas

- **NestJS**: Framework Node.js para construção de aplicações server-side eficientes e escaláveis
- **TypeORM**: ORM (Object-Relational Mapping) para TypeScript e JavaScript
- **MySQL**: Sistema de gerenciamento de banco de dados relacional
- **TypeScript**: Linguagem de programação tipada que compila para JavaScript

## Estrutura do Projeto

O projeto está organizado nas seguintes entidades principais:

- **People**: Gerenciamento de pessoas (médicos, pacientes, funcionários)
- **Address**: Gerenciamento de endereços (embedded entity)
- **Consultancy**: Gerenciamento de clínicas/consultórios

## Endpoints

### Criar uma Clínica (POST /consultancy)

Exemplo de payload para criar uma nova clínica:

```json
{
  "name": "Clínica Saúde Total",
  "address": {
    "street": "Avenida Principal",
    "number": 1234,
    "complement": "Sala 301",
    "neighborhood": "Centro",
    "cep": "12345-678",
    "cityId": "1"
  },
  "email": "contato@clinicasaudetotal.com.br",
  "whatsapp": 11999999999,
  "phone": 1133333333,
  "status": true
}
```

## Configuração do Ambiente

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=meu_consultorio
```

4. Execute as migrações:

```bash
npm run typeorm:run-migrations
```

5. Inicie o servidor:

```bash
npm run start:dev
```

## Scripts Disponíveis

- `npm run start`: Inicia a aplicação em modo de produção
- `npm run start:dev`: Inicia a aplicação em modo de desenvolvimento
- `npm run build`: Compila o projeto
- `npm run test`: Executa os testes unitários
- `npm run test:e2e`: Executa os testes end-to-end
