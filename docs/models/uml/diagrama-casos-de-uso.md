# Diagrama de Casos de Uso — nassauTickets

## Atores

- **Cliente:** utiliza o totem para emitir uma senha.
- **Atendente:** chama e realiza o atendimento das senhas.
- **Gerente:** realiza cadastros e consulta relatórios.
- **Sistema:** controla as filas, chamadas, painel e registros.

## Casos de uso

```mermaid
flowchart LR

    Cliente --> UC1[Emitir senha]

    Atendente --> UC2[Chamar próxima senha]
    Atendente --> UC3[Chamar senha novamente]
    Atendente --> UC4[Iniciar atendimento]
    Atendente --> UC5[Finalizar atendimento]

    Gerente --> UC6[Consultar relatórios]
    Gerente --> UC7[Consultar auditoria]
    Gerente --> UC8[Gerenciar cadastros]

    Sistema --> UC1
    Sistema --> UC2
    Sistema --> UC3
    Sistema --> UC4
    Sistema --> UC5
    Sistema --> UC6
    Sistema --> UC7
    Sistema --> UC8