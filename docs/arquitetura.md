# Arquitetura do Sistema — nassauTickets

## Visão geral

O nassauTickets será desenvolvido utilizando uma arquitetura separada em frontend, backend e banco de dados.

```mermaid
flowchart LR
    C[Cliente] --> F[Frontend React]
    A[Atendente] --> F
    G[Gerente] --> F

    F --> B[Backend Node.js + Express]
    B --> DB[(MySQL)]

    B --> P[Painel de Atendimento]