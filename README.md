PORTAL DE NOTÍCIAS + FORMULÁRIO (FULL STACK)

  Projeto Full Stack desenvolvido com Angular (Standalone) no frontend e Node.js + Express no
backend, utilizando MongoDB como banco de dados.
  O sistema consiste em um portal de notícias com autenticação e gerenciamento de conteúdo, além
de um formulário de contato integrado à API. O projeto segue boas práticas de desenvolvimento
web moderno, com API REST, separação de responsabilidades e uso de Docker.


ARQUITETURA DO PROJETO
- Frontend: Angular 17 (Standalone)
- Backend Principal: Node.js com Express
- Microserviço de Auditoria: ASP.NET Core 8 (C#)
- Banco de Dados: MongoDB
  
TECNOLOGIAS UTILIZADAS

**Frontend:**
Angular, TypeScript, HTML5, SCSS

**Backend & Microserviços:**
- Node.js, Express.js (API Principal)
- ASP.NET Core 8, C# (Serviço de Auditoria)
- MongoDB, Mongoose, JWT

**Ferramentas:**
Git, GitHub, Docker, Docker Compose, Postman


Portal de Notícias:
- Listagem de notícias
- Visualização de notícia por ID
- Criação, edição e exclusão de notícias (rotas protegidas)
- Autenticação de usuários via JWT
  
Formulário:
- Envio de formulário de contato
- Validação de campos obrigatórios
- Persistência dos dados no banco
- Listagem dos formulários enviados
  
ROTAS DA API

Autenticação:
POST /api/auth/register
POST /api/auth/login

Notícias:
GET /api/news
GET /api/news/:id
POST /api/news
PUT /api/news/:id
DELETE /api/news/:id
Formulários:

POST /api/formularios
GET /api/formularios
VARIÁVEIS DE AMBIENTE
PORT=3000
MONGO_URI=sua_string_de_conexao_mongodb
JWT_SECRET=sua_chave_secreta

OBSERVAÇÃO SOBRE DIREITOS AUTORAIS
As notícias exibidas neste sistema são obtidas a partir de fontes públicas relacionadas à
Assembleia de Deus, com finalidade exclusivamente acadêmica e educacional.
Este projeto não possui fins comerciais e não reivindica direitos autorais sobre os conteúdos
apresentados.

OBJETIVO DO PROJETO
Projeto desenvolvido para fins acadêmicos e educacionais, com o objetivo de praticar
desenvolvimento Full Stack, integração entre frontend e backend, uso de API REST e Docker.

AUTOR
Talisson Pereira de Oliveira
Estudante de Bacharelado em Tecnologia da Informação – UFRN (IMD)
GitHub: https://github.com/TalissonOliveira14
