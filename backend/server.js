const express = require("express")

const app = express()

const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
  res.send("nassauTickets Backend funcionando!")
})

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    sistema: "nassauTickets",
  })
})

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`)
})