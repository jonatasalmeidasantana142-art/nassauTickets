# Desempenho, Concorrência e Disponibilidade — nassauTickets

## Desempenho

O sistema deverá responder às operações de atendimento de forma rápida, principalmente durante a emissão e chamada de senhas.

### Requisitos

- A emissão de uma senha deverá ocorrer sem atrasos perceptíveis para o cliente.
- A chamada de uma senha deverá atualizar o painel rapidamente.
- As consultas de relatórios deverão apresentar os dados de forma eficiente.
- O sistema deverá suportar o fluxo de atendimento durante o horário de funcionamento do laboratório.

## Concorrência

O sistema poderá receber solicitações simultâneas de diferentes atendentes.

### Requisitos

- Duas solicitações simultâneas não poderão resultar na chamada da mesma senha.
- O sistema deverá garantir que uma senha retirada da fila não fique disponível novamente para outro atendente.
- As alterações de estado das senhas deverão ser registradas de forma consistente.
- O banco de dados deverá manter a integridade das informações durante operações simultâneas.

## Disponibilidade

O sistema deverá permanecer disponível durante o período de funcionamento do laboratório, das 07:00 às 17:00.

### Requisitos

- O sistema deverá permitir a recuperação após falhas.
- Os dados já registrados não deverão ser perdidos em caso de falha temporária.
- O sistema deverá informar quando algum serviço necessário estiver indisponível.
- O encerramento do expediente deverá respeitar as regras definidas para os atendimentos em andamento e senhas restantes.