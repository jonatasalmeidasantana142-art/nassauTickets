function Painel() {
  const senhas = [
    { numero: "261003-SP001", guiche: "Guichê 1" },
    { numero: "261003-SE001", guiche: "Guichê 2" },
    { numero: "261003-SG001", guiche: "Guichê 3" },
  ]

  return (
    <div>
      <h1>Painel de Atendimento</h1>

      <p>Últimas senhas chamadas</p>

      {senhas.map((senha) => (
        <div key={senha.numero}>
          <h2>{senha.numero}</h2>
          <p>{senha.guiche}</p>
        </div>
      ))}
    </div>
  )
}

export default Painel