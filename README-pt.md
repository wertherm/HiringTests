# Kuverse (Instalação)
Instruções detalhadas para instalar e executar o projeto Kuverse Marketplace em seu ambiente local.
## Pré-requisitos
Antes de começar, certifique-se de ter os seguintes requisitos instalados:
1. **Node.js**: Versão 14 ou superior
2. **MongoDB**: Banco de dados necessário para o projeto
3. **Git**: Para clonar o repositório

## Passo a Passo para Instalação

### 1. Clonar o Repositório
```bash
git clone [URL_DO_REPOSITÓRIO]
cd [NOME_DO_PROJETO]
```

### 2. Instalar Dependências do Backend
```bash
npm install
```

### 3. Instalar Dependências do Frontend
```bash
cd client
npm install
cd ..
```

### 4. Configurar Variáveis de Ambiente

#### Frontend (client/.env)
O arquivo já está configurado para a rede Exosama. Para mudar para Moonbase Testnet, descomente as primeiras linhas e comente as últimas.

Configuração atual para Exosama:
```
GENERATE_SOURCEMAP=false
REACT_APP_NETWORK = "Exosama Network"
REACT_APP_NETWORK_ID = 2109
REACT_APP_COIN = SAMA
REACT_APP_NODE = "https://rpc.exosama.com"
REACT_APP_NODE_1 = "https://rpc.exosama.com"
REACT_APP_NODE_2 = "https://rpc.exosama.com"
REACT_APP_NODE_3 = "https://rpc.exosama.com"
REACT_APP_BLOCK_EXPLORER = "https://explorer.exosama.com"
REACT_APP_KUSAMA_NODE = "wss://kusama-rpc.polkadot.io"
REACT_APP_BASE_URL = "https://test.kuverse.app"
```

#### Backend (.env)
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
MONGODB_URI=sua_url_do_mongodb
JWT_SECRET=seu_segredo_jwt
PORT=5000
```

### 5. Iniciar o Projeto

#### Desenvolvimento
Para rodar tanto o backend quanto o frontend simultaneamente:

```bash
npm run dev
```
#### Produção
Para executar em modo produção:
```bash
# Primeiro, build do frontend
cd client
npm run build
cd ..

# Depois, iniciar o servidor em modo produção
NODE_ENV=production node server.js
```

## Detalhes Técnicos

### Portas
- Backend: 5000 (padrão)
- Frontend: 3000 (desenvolvimento)
### Redes Blockchain
- Configuração padrão: Rede Exosama
- Alternativa: Moonbase Testnet (requer alteração nas variáveis de ambiente)
### Banco de Dados
- MongoDB necessário
- URL de conexão configurável no .env do backend
### Dependências Principais
- Web3.js
- Ethers.js
- Polkadot
- IPFS
- JWT para autenticação

## Solução de Problemas

### 1. Erro de Porta em Uso
- Verifique a disponibilidade das portas 3000 e 5000
- Configure portas alternativas se necessário
### 2. Erro de Conexão com MongoDB
- Verifique se o MongoDB está rodando
- Confirme a URL de conexão no .env
### 3. Erro de Dependências
Execute os seguintes comandos:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```
### 4. Erro de Build do Frontend
- Verifique as variáveis de ambiente
- Confirme a sintaxe do código

## Observações Importantes
1. **Carteira Web3**
   - Necessária para interações blockchain
   - Configure para a rede correta (Exosama ou Moonbase)
1. **Ambiente de Desenvolvimento**
   - Use `npm run dev` para desenvolvimento
   - Permite execução simultânea do frontend e backend
1. **Produção**
   - Execute o build do frontend antes de iniciar o servidor
   - Configure adequadamente as variáveis de ambiente
## Suporte
Se encontrar problemas ou precisar de ajuda adicional:
1. Verifique a documentação do projeto
2. Consulte o README.md principal
3. Abra uma issue no repositório do projeto
## Contribuindo
Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Faça commit das alterações
4. Abra um Pull Request

---
**Nota**: Este guia foi gerado automaticamente e pode ser atualizado conforme necessário. Consulte sempre a documentação oficial do projeto para informações mais recentes.