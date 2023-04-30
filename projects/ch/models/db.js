const Sequelize = require("sequelize");

const sequelize = new Sequelize('hoursapp', 'root', 'sql1405', {
  host: "localhost",
  dialect: "mysql"
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}