import Sequelize from 'sequelize';
import * as config from '../../config/dbConfig';
// new Sequelize(database, username, password, { dialect });
export default new Sequelize(config);
