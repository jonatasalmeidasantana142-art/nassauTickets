# Regras de Negócio

## RN01 — Tipos de senha

O sistema deve trabalhar com três tipos de senha:
- SP — Senha Prioritária;
- SG — Senha Geral;
- SE — Senha para retirada de Exames.

## RN02 — Prioridade de atendimento

A senha prioritária (SP) possui prioridade sobre a senha geral (SG).

## RN03 — Ordem de chamada

A sequência de atendimento deve seguir o padrão:

SP → SE ou SG → SP → SE ou SG

A cada novo ciclo, deve ser chamada uma nova senha prioritária, diferente da senha prioritária chamada anteriormente.

## RN04 — Atendimento de senha prioritária

Quando houver uma senha SP aguardando atendimento, ela deve ser considerada na definição da próxima senha a ser chamada.

## RN05 — Senha para retirada de exames

A senha SE deve ser considerada após uma senha SP quando houver uma senha desse tipo aguardando atendimento.

## RN06 — Ausência do cliente

Caso o cliente não compareça após duas chamadas, a senha deve ser registrada como "NÃO COMPARECEU".

## RN07 — Painel de atendimento

O painel deve exibir somente as cinco últimas senhas chamadas.

O painel não deve exibir antecipadamente a próxima senha a ser chamada.

## RN08 — Horário de funcionamento

O sistema deve operar entre 07:00 e 17:00.

## RN09 — Encerramento do expediente

Os atendimentos que já estiverem em andamento no encerramento do expediente devem ser finalizados normalmente.

As senhas que permanecerem aguardando atendimento após o encerramento devem ser descartadas.

## RN10 — Guichês

Qualquer guichê pode realizar o atendimento de qualquer tipo de senha.

## RN11 — Numeração das senhas

O número da senha deve seguir o padrão:

YYMMDD-PPSQ

Onde:
- YY representa o ano;
- MM representa o mês;
- DD representa o dia;
- PP representa o tipo da senha;
- SQ representa a sequência da senha.

## RN12 — Reinício da sequência

A sequência numérica das senhas deve ser reiniciada diariamente.

## RN13 — Tempo de atendimento SP

O tempo médio de atendimento de uma senha SP deve ser de aproximadamente 15 minutos, podendo variar entre 10 e 20 minutos.

## RN14 — Tempo de atendimento SG

O tempo médio de atendimento de uma senha SG deve ser de aproximadamente 5 minutos, podendo variar entre 2 e 8 minutos.

## RN15 — Tempo de atendimento SE

O atendimento de uma senha SE normalmente deve durar menos de 2 minutos.

## RN16 — Registro de atendimentos

O sistema deve manter os registros necessários para consultas, relatórios e auditoria dos atendimentos.