const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Shelf = sequelize.define('shelf', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

module.exports = Shelf;
