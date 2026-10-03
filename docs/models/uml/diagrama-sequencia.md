# Diagrama de Sequência — Emissão e Atendimento de Senha

## Fluxo principal

```mermaid
sequenceDiagram
    participant C as Cliente
    participant T as Totem
    participant S as Sistema
    participant A as Atendente
    participant P as Painel

    C->>T: Solicita senha
    T->>S: Solicita emissão
    S->>S: Gera número da senha
    S-->>T: Retorna senha
    T-->>C: Exibe senha

    A->>S: Solicita próxima senha
    S->>S: Verifica fila e prioridade
    S-->>A: Retorna senha
    S->>P: Atualiza painel
    P-->>C: Exibe senha chamada

    A->>S: Inicia atendimento
    A->>S: Finaliza atendimento
    S->>S: Registra atendimento