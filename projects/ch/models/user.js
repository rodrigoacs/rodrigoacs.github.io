const db = require('./db')

const User = db.sequelize.define("users", {
  username: {
    type: db.Sequelize.STRING
  },
  password: {
    type: db.Sequelize.STRING
  }
})

// User.create({
//   username: 'teste',
//   password: 'teste'
// })

module.exports = User