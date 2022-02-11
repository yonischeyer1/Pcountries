import Sequelize from 'sequelize';
import { config as mysqlConfig } from '../config/mysql.config.js';

// mysql sequelize instance
const sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.user, mysqlConfig.password, {
  host: mysqlConfig.host,
  dialect: mysqlConfig.dialect
});

export { Sequelize, sequelize };