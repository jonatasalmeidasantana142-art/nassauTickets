function Painel({ senhas }) {
  return (
    <div>
      <h1>Painel de Atendimento</h1>

      <p>Últimas senhas chamadas</p>

      {senhas.length === 0 && (
        <p>Nenhuma senha foi chamada ainda.</p>
      )}

      {senhas
        .slice(-5)
        .reverse()
        .map((senha) => (
          <div key={senha.numero}>
            <h2>{senha.numero}</h2>
            <p>{senha.guiche}</p>
          </div>
        ))}
    </div>
  )
}

export default Painel