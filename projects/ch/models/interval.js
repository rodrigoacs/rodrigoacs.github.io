const db = require('./db')

const Interval = db.sequelize.define("intervals", {
  interval: {
    type: db.Sequelize.STRING
  },
  user_id: {
    type: db.Sequelize.INTEGER
  }
})

const Users = db.sequelize.define("users", {
  username: {
    type: db.Sequelize.STRING
  },
  password: {
    type: db.Sequelize.STRING
  }
})

module.exports = Interval