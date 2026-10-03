import { useState } from "react"
import Header from "../components/header"
import Button from "../components/button"

function Totem({ onEmitirSenha }) {
  const [senha, setSenha] = useState(null)

  const [sequencias, setSequencias] = useState({
    SP: 0,
    SG: 0,
    SE: 0,
  })

  function emitirSenha(tipo) {
    const novaSequencia = sequencias[tipo] + 1

    setSequencias({
      ...sequencias,
      [tipo]: novaSequencia,
    })

    const data = new Date()

    const ano = String(data.getFullYear()).slice(-2)
    const mes = String(data.getMonth() + 1).padStart(2, "0")
    const dia = String(data.getDate()).padStart(2, "0")

    const numero = String(novaSequencia).padStart(3, "0")

    const novaSenha = `${ano}${mes}${dia}-${tipo}${numero}`

    setSenha(novaSenha)

    onEmitirSenha(novaSenha)
  }

  return (
    <div>
      <Header />

      <main>
        <h2>Como podemos ajudar?</h2>

        <p>Selecione o tipo de atendimento:</p>

        <Button onClick={() => emitirSenha("SP")}>
          Senha Prioritária
        </Button>

        <Button onClick={() => emitirSenha("SG")}>
          Senha Geral
        </Button>

        <Button onClick={() => emitirSenha("SE")}>
          Retirada de Exames
        </Button>

        {senha && (
          <section>
            <h2>Sua senha é:</h2>

            <h1>{senha}</h1>

            <p>Aguarde o atendimento.</p>
          </section>
        )}
      </main>
    </div>
  )
}

export default Totem