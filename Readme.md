
**Problem1** \
Fix "Add New Notice" Page \
<mark>/app/notices/add</mark> \
When click the 'Save' button, 'description' doesn't be saved. \
<b>Fix it.</b>

**Problem2** \
Complete CRUD operation in Student management page. \
<mark>/src/modules/students/students-controller.js</mark>

---

## Frameworks e Tecnologias

### Backend
- **Node.js** com **Express.js** como framework web
- **PostgreSQL** como banco de dados relacional
- **JWT** (JSON Web Tokens) para autenticação
- **Argon2** para hash de senhas
- **Zod** para validação de dados
- **Resend** para envio de emails
- **Dotenv** para gerenciamento de variáveis de ambiente
### Frontend
- **React** como biblioteca de UI
- **TypeScript** para tipagem estática
- **Redux Toolkit** para gerenciamento de estado
- **RTK Query** para gerenciamento de requisições e cache
- **Redux Persist** para persistência de estado
- **React Router** para roteamento
- **Material UI** como biblioteca de componentes
- **React Hook Form** com **Zod** para validação de formulários
- **Material React Table** para tabelas de dados
- **React Toastify** para notificações
- **Date-fns** para manipulação de datas
- **Vite** como bundler

## Arquitetura

### Backend

O backend segue uma arquitetura modular baseada em:

1. **Camadas**:
2. **Controllers**: Lidam com requisições HTTP e respostas
3. **Services**: Contêm a lógica de negócios
4. **Repositories**: Interagem com o banco de dados
5. **Middlewares**: Processam requisições antes de chegarem aos controllers
6. **Utils**: Funções utilitárias reutilizáveis

7. **Padrão de Projeto**:
8. Utiliza o padrão Repository para abstrair a camada de acesso a dados
9. Implementa o padrão Service para encapsular a lógica de negócios
10. Segue o padrão MVC (Model-View-Controller), onde o "View" é o frontend React

11. **Segurança**:
12. Implementa proteção CSRF
13. Utiliza tokens JWT para autenticação
14. Implementa controle de acesso baseado em funções (RBAC)
15. Armazena senhas com hash seguro usando Argon2

### Frontend

O frontend segue uma arquitetura baseada em:

1. **Estrutura de Domínios**:
2. Organizado por domínios de negócio (student, staff, notice, etc.)
3. Cada domínio contém seus próprios componentes, páginas, tipos e lógica

4. **Gerenciamento de Estado**:
5. Redux Toolkit para estado global
6. RTK Query para gerenciamento de requisições API e cache
7. Context API para estados locais de componentes específicos

8. **Padrões de Design**:
9. Componentes reutilizáveis
10. Hooks personalizados para lógica compartilhada
11. Formulários controlados com React Hook Form
12. Tipagem forte com TypeScript

13. **Roteamento**:
14. Rotas protegidas que verificam autenticação
15. Estrutura de rotas aninhadas

## Comunicação Cliente-Servidor
- API RESTful com endpoints organizados por recursos
- Autenticação baseada em cookies HTTP-only para tokens JWT
- Proteção CSRF para requisições que modificam dados
- Validação de dados tanto no cliente quanto no servidor