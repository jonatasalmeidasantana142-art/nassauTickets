import { useState } from "react"
import Totem from "./pages/Totem"
import Painel from "./pages/Painel"
import Atendimento from "./pages/Atendimento"

function App() {
  const [fila, setFila] = useState([])
  const [senhasChamadas, setSenhasChamadas] = useState([])

  function adicionarSenha(senha) {
    setFila((filaAtual) => [...filaAtual, senha])
  }

  function chamarSenha() {
    if (fila.length === 0) {
      return
    }

    const proximaSenha = fila[0]

    setFila((filaAtual) => filaAtual.slice(1))

    setSenhasChamadas((chamadasAtual) => [
      ...chamadasAtual,
      {
        numero: proximaSenha,
        guiche: "Guichê 1",
      },
    ])
  }

  return (
    <div>
      <Totem onEmitirSenha={adicionarSenha} />

      <hr />

      <Painel senhas={senhasChamadas} />

      <hr />

      <Atendimento
        fila={fila}
        senhaAtual={
          senhasChamadas.length > 0
            ? senhasChamadas[senhasChamadas.length - 1].numero
            : null
        }
        onChamarSenha={chamarSenha}
      />
    </div>
  )
}

export default App