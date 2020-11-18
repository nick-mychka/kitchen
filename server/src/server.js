import express from 'express';
import bodyParser from 'body-parser';

import sequelize from './data/db/connection';
import routes from './api/routes';

import env from './env';

const app = express();

sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.');
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(env.app.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${env.app.port}!`);
});
