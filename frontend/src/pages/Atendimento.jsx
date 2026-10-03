import { useEffect, useState } from "react"

function Atendimento({ fila, senhaAtual, onChamarSenha }) {
  const [statusBackend, setStatusBackend] = useState("Verificando backend...")

  useEffect(() => {
    fetch("http://localhost:3000/api/health")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setStatusBackend(dados.status === "ok" ? "Backend conectado" : "Backend indisponível")
      })
      .catch(() => {
        setStatusBackend("Backend indisponível")
      })
  }, [])

  return (
    <div>
      <h1>Atendimento</h1>

      <p>Guichê 1</p>

      <p>Status: {statusBackend}</p>

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