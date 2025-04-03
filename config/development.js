require('dotenv').config();

module.exports = {
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  server: {
    port: process.env.SERVER_PORT
  }
};
