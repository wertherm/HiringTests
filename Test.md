### **Avaliação Técnica**
O processo de avaliação foi elaborado para medir sua **experiência em tecnologia blockchain, desenvolvimento de smart contracts e arquitetura de sistemas**.

A avaliação inclui:
1. **Questões teóricas** (escritas)
2. **Desafio prático de programação**
3. **Questões baseadas em cenários reais**
    
**Links da avaliação:**  
📌 **Repositório do Kuverse para o teste técnico:** [GitHub - Kuverse MVP](https://github.com/KuverseApp/kuverse-mvp)  
📌 **Documento com instruções detalhadas do teste:** [Google Docs](https://docs.google.com/document/d/1J9ZgzvAmOFaUAtUqW9ERWPFEwqWxPFS4mYB4YOznhSQ/edit?usp=sharing)

### **Instruções para o Teste Prático**
Você deve concluir o **desafio de codificação em 3 a 5 horas**. Esse tempo permitirá que você demonstre suas **habilidades técnicas**, considerando também a **integração das soluções** com o projeto Kuverse.

---

# Blockchain: Desafios e Práticas

## Seção 1: Conhecimento e Fundamentos (Questões Escritas)

### Mecanismos de Consenso em Blockchain

1. Descreva os diferentes mecanismos de consenso utilizados em redes blockchain, como Proof of Work (PoW), Proof of Stake (PoS) e Delegated Proof of Stake (DPoS).
2. Discuta as vantagens e desvantagens de cada um desses mecanismos.

### Vulnerabilidades em Smart Contracts

1. Identifique e explique pelo menos três vulnerabilidades comuns associadas a smart contracts.
2. Descreva estratégias ou boas práticas que você adotaria para mitigar esses riscos.

### Metadados em NFTs

1. Explique o conceito de metadados em NFTs.
2. Como os metadados aumentam o valor de um NFT?
3. Quais são as melhores práticas para armazenamento e gerenciamento dos metadados de um NFT?

## Seção 2: Desafio Prático de Codificação

### 1. Desenvolvimento de Smart Contract

**Tarefa:**

- Escreva um contrato inteligente ERC-721 para uma coleção de NFTs.
- O contrato deve incluir funcionalidades para minting (cunhagem), transferência e consulta de propriedade.
- Implemente boas práticas de segurança básicas.

**Requisitos:**

- Incluir uma função que permita aos usuários cunhar um novo NFT com metadados (nome, descrição e URL da imagem).
- Garantir controles de acesso adequados e emissão de eventos.

### 2. Revisão de Código

**Tarefa:**

- Analise o seguinte trecho de código e identifique possíveis vulnerabilidades e ineficiências.
- Sugira melhorias e explique sua justificativa.

```solidity
function transfer(address _to, uint256 _tokenId) public {
    require(ownerOf(_tokenId) == msg.sender, "Not the owner");
    owners[_tokenId] = _to;
}
```

### 3. Implantação (Deployment)

- Forneça um guia rápido sobre como implantar seu smart contract em uma rede de testes (por exemplo, Rinkeby ou Kovan).
- Inclua as configurações e comandos necessários para a implantação.

## Seção 3: Resolução de Problemas e Questões Baseadas em Cenários

### 1. Cenário de Performance

**Tarefa:**

- Sua equipe está enfrentando problemas de desempenho com os contratos inteligentes devido a altas taxas de gas durante a cunhagem de NFTs.
- Como você resolveria esse problema?
- Quais otimizações você consideraria?

### 2. Experiência em Projetos Reais

**Pergunta:**

- Fale sobre um projeto blockchain desafiador em que você trabalhou.
- Quais foram os principais obstáculos?
- Como você os resolveu?

## Entregáveis (Deliverables)

- Código-fonte do contrato inteligente e script de implantação, integrados ao repositório do projeto.
- Vídeo curto ou captura de tela demonstrando o processo de cunhagem de NFTs.
- Link para uma demonstração ao vivo do contrato em funcionamento.