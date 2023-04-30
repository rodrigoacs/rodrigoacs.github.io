const db = require('./db')

const Interval = db.sequelize.define("intervals", {
  interval: {
    type: db.Sequelize.STRING
  },
  user_id: {
    type: db.Sequelize.INTEGER
  }
})

module.exports = Interval