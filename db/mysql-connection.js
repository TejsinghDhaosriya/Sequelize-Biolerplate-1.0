const { Sequelize } = require("sequelize");

const sequelizeConnection = new Sequelize("noteProject", "root", "root", {
    host: "localhost",
    dialect: "mysql",
  });

module.exports = sequelizeConnection;
