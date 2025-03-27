# Kuverse (Arquitetura)
Projeto com arquitetura cliente-servidor com separação clara entre frontend e backend:

#### Backend (Node.js/Express)
- Estrutura MVC (Model-View-Controller):
- /models: Contém os modelos de dados
- /views: Templates EJS para renderização do servidor
- /controllers: Lógica de negócios
- /routes: Definição de rotas da API
- /config: Configurações do sistema
- /public: Arquivos estáticos
#### Frontend (React)
- Localizado na pasta /client
- Utiliza Create React App como base
- Possui sua própria estrutura de componentes e assets
### Tecnologias Principais

#### Backend:
- Framework: Express.js
- Banco de Dados: MongoDB (através do Mongoose)
- Autenticação: JWT (jsonwebtoken)
- Blockchain:
- Web3.js
- Ethers.js
- Polkadot
- IPFS: Para armazenamento descentralizado
- Templates: EJS (Embedded JavaScript)
- Agendamento: node-cron para tarefas programadas
#### Frontend:
- Framework: React
- Build Tool: CRACO (Create React App Configuration Override)
- Gerenciamento de Estado: Provavelmente React Context ou Redux (baseado na estrutura)
### Funcionalidades Específicas
O projeto parece ser uma aplicação blockchain com:
- Integração com múltiplas redes (Ethereum e Polkadot)
- Sistema de sincronização de subgraph
- Funcionalidades de carteira (wallet)
- Sistema de autenticação
- Upload de arquivos (multer)
- Tarefas agendadas (cron-sync.js)
### Estrutura de Arquivos Importantes
- server.js: Ponto de entrada do backend
- subgraph-sync.js: Sincronização com subgraph
- cron-sync.js: Tarefas agendadas
- egg-ku-matching.json: Possível configuração de matching
- .env: Variáveis de ambiente (no frontend)
### Padrões de Desenvolvimento
- Uso de variáveis de ambiente para configuração
- Separação clara de responsabilidades (MVC)
- Sistema de rotas modular
- Integração com múltiplas tecnologias blockchain
- Sistema de autenticação e autorização

Este parece ser um projeto blockchain complexo que integra várias tecnologias modernas e segue boas práticas de desenvolvimento. A arquitetura está bem organizada e modular, permitindo fácil manutenção e escalabilidade.