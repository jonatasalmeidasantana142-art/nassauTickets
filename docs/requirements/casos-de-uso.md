# Casos de Uso

## Atores

### Cliente

Pessoa que utiliza o totem para emitir uma senha e aguarda o atendimento.

### Atendente

Funcionário responsável por chamar e realizar o atendimento das senhas.

### Gerente

Usuário com permissões administrativas, responsável pelos cadastros e acesso aos relatórios.

### Sistema

Responsável pelo controle das senhas, filas, painel e registros dos atendimentos.

---

## UC01 — Emitir senha

**Ator principal:** Cliente

**Descrição:**  
O cliente utiliza o totem para selecionar o tipo de atendimento desejado e emitir uma senha.

**Fluxo principal:**
1. O cliente acessa o totem.
2. O sistema apresenta os tipos de senha disponíveis.
3. O cliente seleciona o tipo desejado.
4. O sistema gera uma senha.
5. O sistema apresenta a senha ao cliente.

---

## UC02 — Chamar próxima senha

**Ator principal:** Atendente

**Descrição:**  
O atendente solicita ao sistema a próxima senha que deverá ser atendida.

**Fluxo principal:**
1. O atendente acessa o sistema.
2. O atendente solicita a próxima senha.
3. O sistema verifica as filas existentes.
4. O sistema aplica as regras de prioridade.
5. O sistema seleciona a próxima senha.
6. O sistema registra a chamada.
7. A senha e o guichê são apresentados no painel.

---

## UC03 — Chamar senha novamente

**Ator principal:** Atendente

**Descrição:**  
O atendente realiza uma segunda chamada para uma senha cujo cliente não compareceu.

**Fluxo principal:**
1. O atendente seleciona a opção de chamada novamente.
2. O sistema registra a segunda chamada.
3. O sistema apresenta novamente a senha no painel.
4. O sistema realiza o aviso de chamada.

**Fluxo alternativo:**
- Caso o cliente não compareça após a segunda chamada, o sistema registra a senha como "NÃO COMPARECEU".

---

## UC04 — Iniciar atendimento

**Ator principal:** Atendente

**Descrição:**  
O atendente registra o início do atendimento de uma senha chamada.

**Fluxo principal:**
1. O atendente seleciona uma senha chamada.
2. O sistema registra a data e hora do início.
3. A senha passa para o estado de atendimento.

---

## UC05 — Finalizar atendimento

**Ator principal:** Atendente

**Descrição:**  
O atendente encerra o atendimento de uma senha.

**Fluxo principal:**
1. O atendente conclui o atendimento.
2. O sistema registra a data e hora do término.
3. A senha passa para o estado "ATENDIDA".

---

## UC06 — Emitir relatórios

**Ator principal:** Gerente

**Descrição:**  
O gerente consulta informações sobre os atendimentos realizados.

**Fluxo principal:**
1. O gerente realiza login.
2. O gerente acessa a área de relatórios.
3. O sistema apresenta as opções de relatório.
4. O gerente seleciona o período desejado.
5. O sistema apresenta os dados solicitados.

---

## UC07 — Consultar auditoria

**Ator principal:** Gerente

**Descrição:**  
O gerente consulta o histórico das operações realizadas no sistema.

**Fluxo principal:**
1. O gerente acessa a área de auditoria.
2. O sistema apresenta os registros disponíveis.
3. O gerente consulta as operações realizadas.
4. O sistema apresenta informações sobre atendente, guichê, senha e horários.

---

## UC08 — Gerenciar cadastros

**Ator principal:** Gerente

**Descrição:**  
O gerente realiza os cadastros necessários para o funcionamento do sistema.

**Fluxo principal:**
1. O gerente realiza login.
2. O gerente acessa a área administrativa.
3. O sistema apresenta os cadastros disponíveis.
4. O gerente realiza a operação desejada.
5. O sistema valida e registra a alteração.