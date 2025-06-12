# Meu Consultório - Backend

Este é o backend do sistema Meu Consultório, uma aplicação para gerenciamento de clínicas médicas.

## Tecnologias Utilizadas

- **NestJS**: Framework Node.js para construção de aplicações server-side eficientes e escaláveis
- **TypeORM**: ORM (Object-Relational Mapping) para TypeScript e JavaScript
- **MySQL**: Sistema de gerenciamento de banco de dados relacional
- **TypeScript**: Linguagem de programação tipada que compila para JavaScript
- **Zod**: Biblioteca de validação de esquemas com inferência de tipos TypeScript

## Estrutura do Projeto

O projeto está organizado nas seguintes entidades principais:

- **People**: Gerenciamento de pessoas (médicos, pacientes, funcionários)
- **Address**: Gerenciamento de endereços (embedded entity)
- **Consultancy**: Gerenciamento de clínicas/consultórios

## Endpoints

### Consultórios (Consultancy)

#### Listar Consultórios (GET /consultancy)

Retorna a lista de todos os consultórios cadastrados.

Exemplo de resposta:

```json
[
  {
    "id": "709d3326-bd5e-4bdd-ab59-36750ed7e848",
    "name": "Nome da clinica",
    "cnpj": "12345678000190",
    "razaoSocial": "Nome da Clinica LTDA",
    "email": "email@exemplo.com",
    "phone": 1234567890
  }
]
```

#### Buscar Consultório por ID (GET /consultancy/{id})

Retorna os detalhes de um consultório específico.

Exemplo de resposta:

```json
{
  "id": "5b6ca0ea-7652-4782-8513-127646d6a6b0",
  "name": "Nome da Clinica",
  "email": "email@exemplo.com",
  "phone": 1234567890,
  "whatsapp": 1234567890,
  "status": true,
  "address": {
    "street": "Rua Exemplo",
    "number": 123,
    "complement": null,
    "neighborhood": "Centro",
    "cep": "12345-678",
    "cityId": "1"
  },
  "cnpj": "12345678000190",
  "razao_social": "Nome da Empresa LTDA",
  "createdAt": "2024-04-06T21:00:00.000Z",
  "updatedAt": null
}
```

#### Criar Consultório (POST /consultancy)

Cria um novo consultório.

Payload:

```json
{
  "name": "Nome da Clinica",
  "email": "email@exemplo.com",
  "phone": 1234567890,
  "whatsapp": 1234567890,
  "status": true,
  "address": {
    "street": "Rua Exemplo",
    "number": 123,
    "complement": null,
    "neighborhood": "Centro",
    "cep": "12345-678",
    "cityId": 1
  },
  "cnpj": "12.345.678/0001-90",
  "razao_social": "Nome da Empresa LTDA"
}
```

#### Atualizar Consultório (PUT /consultancy/{id})

Atualiza um consultório existente.

Payload:

```json
{
  "name": "Nome da Clinica Atualizado",
  "email": "email.novo@exemplo.com",
  "phone": 1234567890,
  "whatsapp": 1234567890,
  "status": true,
  "address": {
    "street": "Nova Rua",
    "number": 456,
    "complement": "Sala 123",
    "neighborhood": "Novo Bairro",
    "cep": "12345-678",
    "cityId": 2
  },
  "cnpj": "12.345.678/0001-90",
  "razao_social": "Novo Nome da Empresa LTDA"
}
```

#### Excluir Consultório (DELETE /consultancy/{id})

Remove um consultório do sistema.

---

### Gêneros (Gender)

#### Listar Gêneros (GET /gender)

Retorna a lista de todos os gêneros cadastrados.

Exemplo de resposta:

```json
[
  {
    "id": "5b6ca0ea-7652-4782-8513-127646d6a6b1",
    "name": "Masculino"
  },
  {
    "id": "5b6ca0ea-7652-4782-8513-127646d6a6b2",
    "name": "Feminino"
  }
]
```

#### Buscar Gênero por ID (GET /gender/{id})

Retorna os detalhes de um gênero específico.

Exemplo de resposta:

```json
{
  "id": "5b6ca0ea-7652-4782-8513-127646d6a6b1",
  "name": "Masculino"
}
```

#### Criar Gênero (POST /gender)

Cria um novo gênero.

Payload:

```json
{
  "name": "Não Binário"
}
```

#### Atualizar Gênero (PUT /gender/{id})

Atualiza um gênero existente.

Payload:

```json
{
  "name": "Outro"
}
```

#### Excluir Gênero (DELETE /gender/{id})

Remove um gênero do sistema.

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
