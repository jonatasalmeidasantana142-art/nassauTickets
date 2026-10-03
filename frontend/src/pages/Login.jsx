import { useState } from "react"

function Login() {
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")

  function entrar(event) {
    event.preventDefault()

    alert(`Login informado: ${login}`)
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={entrar}>
        <label>
          Login:
          <input
            type="text"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
        </label>

        <br />

        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </label>

        <br />

        <button type="submit">
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login