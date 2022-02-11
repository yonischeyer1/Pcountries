import Sequelize from 'sequelize';
import { sequelize } from '../utils/db-manager.js';

const Country = sequelize.define('country', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  countryName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  capitalName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  capitalLatitude: {
    type: Sequelize.STRING,
    allowNull: false
  },
  capitalLongitude: {
    type: Sequelize.STRING,
    allowNull: false
  },
  countryCode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  continentName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
}, {freezeTableName: true, createdAt: false, updatedAt: false});

export { Country };