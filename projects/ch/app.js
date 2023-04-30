const express = require("express")
const path = require("path");
const app = express()
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")
const Interval = require("./models/interval")

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//template engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//rotas
app.get("/", function (req, res) {
  res.render("inputs")
})

app.post("/save", function (req, res) {
  // se der um log no infos aqui no inicio e um log no clearInfo lá no final da pra entender oq isso faz
  // pega as informações dos campos, torna inteligíveleu e salva no db
  let infos = `${req.body.inicialTime};${req.body.finalTime};${req.body.desc};${req.body.resultTime}`.split(";")
  let clearInfo = []
  for (let i = 0; i < infos.length; i++) {
    infos[i] = infos[i].split(",")
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < infos[i].length; j++) {
      clearInfo[j] += ` ${infos[i][j]}`
    }
  }
  for (let i = 0; i < clearInfo.length; i++) {
    clearInfo[i] = clearInfo[i].split("undefined ")[1]
    // Interval.create({
    //   interval: `${clearInfo[i]}`
    // })
  }
  res.render("inputs")
})

app.listen(8081, function (req, res) {
  console.log("servidor aberto");
})
