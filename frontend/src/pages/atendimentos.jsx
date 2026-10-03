import { useState } from "react"

function atendimento() {
  const [senhaAtual, setSenhaAtual] = useState(null)

  const senhas = [
    "261003-SP001",
    "261003-SE001",
    "261003-SG001",
    "261003-SP002",
  ]

  function chamarProxima() {
    const proxima = senhas.find((senha) => senha !== senhaAtual)

    setSenhaAtual(proxima)
  }

  return (
    <div>
      <h1>Atendimento</h1>

      <p>Guichê 1</p>

      <button onClick={chamarProxima}>
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

export default atendimento