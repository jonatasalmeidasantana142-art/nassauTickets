# Requisitos Funcionais

## RF01 — Emitir senha

O sistema deve permitir que o cliente emita uma senha por meio do totem de atendimento.

## RF02 — Selecionar tipo de senha

O sistema deve permitir que o cliente escolha entre:
- Senha Prioritária (SP);
- Senha Geral (SG);
- Senha para retirada de Exames (SE).

## RF03 — Gerar número da senha

O sistema deve gerar automaticamente o número da senha seguindo o padrão `YYMMDD-PPSQ`, considerando a data, o tipo da senha e sua sequência diária.

## RF04 — Chamar próxima senha

O sistema deve permitir que o atendente chame a próxima senha de acordo com as regras de prioridade definidas.

## RF05 — Chamar senha novamente

O sistema deve permitir que o atendente realize uma nova chamada para uma senha que não compareceu à primeira chamada.

## RF06 — Iniciar atendimento

O sistema deve permitir que o atendente registre o início do atendimento de uma senha chamada.

## RF07 — Finalizar atendimento

O sistema deve permitir que o atendente registre o término do atendimento.

## RF08 — Registrar não comparecimento

O sistema deve registrar a senha como "NÃO COMPARECEU" quando o cliente não comparecer após duas chamadas.

## RF09 — Exibir senhas no painel

O sistema deve exibir no painel as cinco últimas senhas chamadas.

## RF10 — Exibir guichê

O sistema deve informar no painel o guichê responsável pelo atendimento da senha chamada.

## RF11 — Realizar login

O sistema deve permitir que os atendentes realizem login para acessar as funções de atendimento.

## RF12 — Gerar relatórios

O sistema deve permitir a geração de relatórios diários e mensais dos atendimentos.

## RF13 — Consultar relatório detalhado

O sistema deve apresentar informações detalhadas das senhas, incluindo número, tipo, data e hora de emissão, data e hora do atendimento e guichê.

## RF14 — Registrar auditoria

O sistema deve registrar informações das operações de atendimento, incluindo atendente, guichê, senha, horários das chamadas, início e término do atendimento.

## RF15 — Gerenciar cadastros

O sistema deve permitir que o usuário com perfil de gerente realize os cadastros necessários e acesse os relatórios administrativos.