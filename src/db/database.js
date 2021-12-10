const { Sequelize } = require("sequelize");

const db = new Sequelize("usuariosdb", "root", "", {
  host: "localhost",
  dialect: "mysql",
  /* one of | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports = db;
