# Requisitos Não Funcionais

## RNF01 — Segurança

O sistema deve utilizar autenticação para controlar o acesso às funções destinadas aos atendentes e gerentes.

## RNF02 — Controle de acesso

O sistema deve permitir que cada usuário tenha acesso somente às funções correspondentes ao seu perfil.

## RNF03 — Proteção de dados

O sistema deve proteger os dados dos usuários e dos atendimentos contra acesso não autorizado.

## RNF04 — LGPD

O sistema deve tratar os dados pessoais de acordo com os princípios e requisitos aplicáveis da Lei Geral de Proteção de Dados (LGPD).

## RNF05 — Disponibilidade

O sistema deve permanecer disponível durante o horário de funcionamento do laboratório, das 07:00 às 17:00, sempre que a infraestrutura estiver operando normalmente.

## RNF06 — Desempenho

O sistema deve responder às operações de emissão e chamada de senhas em tempo adequado, evitando atrasos que prejudiquem o atendimento.

## RNF07 — Concorrência

O sistema deve controlar solicitações simultâneas de diferentes atendentes para evitar que uma mesma senha seja chamada por mais de um guichê.

## RNF08 — Auditoria

O sistema deve registrar as operações relevantes de atendimento para permitir consultas e auditorias posteriores.

## RNF09 — Acessibilidade

A interface deve apresentar informações de forma clara e acessível, considerando diferentes níveis de familiaridade dos usuários com sistemas digitais.

## RNF10 — Usabilidade

O sistema deve possuir uma interface simples e objetiva, permitindo que as principais operações sejam realizadas sem complexidade desnecessária.

## RNF11 — Compatibilidade

A aplicação web deve ser compatível com navegadores modernos e diferentes tamanhos de tela.

## RNF12 — Recuperação de falhas

O sistema deve tratar falhas de comunicação com o banco de dados ou com outros componentes, informando o usuário quando uma operação não puder ser concluída.

## RNF13 — Integridade dos dados

O sistema deve preservar a consistência dos registros de senhas e atendimentos, evitando duplicidades ou alterações indevidas.

## RNF14 — Manutenibilidade

O código deve ser organizado em componentes e módulos, facilitando futuras correções, atualizações e manutenção.

## RNF15 — Escalabilidade

A arquitetura deve permitir futuras melhorias e expansão do sistema sem exigir uma reconstrução completa da aplicação.