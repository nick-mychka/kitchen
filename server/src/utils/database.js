import { database, username, password, dialect } from '../config/dbConfig';

const Sequelize = require('sequelize');

console.log(database, username, password, { dialect });
const sequelize = new Sequelize(database, username, password, { dialect });

module.exports = sequelize;
