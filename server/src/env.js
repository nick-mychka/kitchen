import dotenv from 'dotenv';

dotenv.config();

const env = {
  app: {
    port: process.env.APP_PORT
  },
  db: {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT
  }
};

export default env;
