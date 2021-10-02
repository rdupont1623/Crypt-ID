const Sequelize = require('sequelize');
require('dotenv').config();
const environment = process.env;

let sequelize;

if (environment.JAWSDB_URL) {
  sequelize = new Sequelize(environment.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    environment.DB_NAME,
    environment.DB_USER,
    environment.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
