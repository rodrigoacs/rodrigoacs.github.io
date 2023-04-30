const express = require("express")
const path = require("path");
const app = express()
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")
const Interval = require("./models/interval")
const User = require("./models/user")
const session = require('express-session')
app.use(session({
  secret: '123'
}));

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//template engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//rotas
app.get("/home", function (req, res) {
  Interval.findAll({ order: [['id', 'DESC']], where: { 'user_id': req.session.userId } }).then(function (intervals) {
    res.render("inputs", { interval: intervals })
  })
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
    Interval.create({
      interval: `${clearInfo[i]}`,
      user_id: req.session.userId
    })
  }
  setTimeout(() => {
    res.redirect("/home")
  }, 500);
})

app.get("/delete/:id", function (req, res) {
  Interval.destroy({ where: { 'id': req.params.id } })
  res.redirect("/home")
})

app.get("/", function (req, res) {
  if (req.session.isLogged) {
    res.redirect("/home")
  } else {
    res.render("login")
  }
})

app.post("/login", function (req, res) {
  User.findAll({ where: { username: req.body.user } }).then(function (user) {
    if (req.body.password == user[0].dataValues.password) {
      req.session.userId = user[0].dataValues.id
      req.session.isLogged = true
      res.redirect('/home')
    } else {
      console.log('senha errada');
      res.redirect('/')
    }
  })
})

app.listen(8081, function (req, res) {
  console.log("servidor abrido");
})
