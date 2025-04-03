const config = require('./config');
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect,
  }
)

module.exports = sequelize;