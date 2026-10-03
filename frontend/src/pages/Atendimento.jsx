function Atendimento({ fila, senhaAtual, onChamarSenha }) {
  return (
    <div>
      <h1>Atendimento</h1>

      <p>Guichê 1</p>

      <p>Senhas aguardando: {fila.length}</p>

      <button onClick={onChamarSenha}>
        Chamar próxima senha
      </button>

      {senhaAtual && (
        <section>
          <h2>Senha chamada:</h2>

          <h1>{senhaAtual}</h1>

          <p>Dirija-se ao Guichê 1.</p>
        </section>
      )}
    </div>
  )
}

export default Atendimento