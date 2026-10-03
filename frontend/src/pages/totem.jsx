import Header from "../components/header"
import Button from "../components/button"

function Totem() {
  return (
    <div>
      <Header />

      <main>
        <h2>Como podemos ajudar?</h2>
        <p>Selecione o tipo de atendimento:</p>

        <Button>Senha Prioritária</Button>
        <Button>Senha Geral</Button>
        <Button>Retirada de Exames</Button>
      </main>
    </div>
  )
}

export default Totem