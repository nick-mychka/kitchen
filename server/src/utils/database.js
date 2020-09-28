import { database, username, password, dialect } from '../config/dbConfig';

const Sequelize = require('sequelize');

console.log(database, username, password, { dialect });
const sequelize = new Sequelize('kitchen', 'ihor', '15kitchen8', { dialect: 'mysql' });

module.exports = sequelize;
