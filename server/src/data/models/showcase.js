import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Showcase = sequelize.define('showcase', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

export default Showcase;
