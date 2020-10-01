import env from './env';

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./utils/database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./routes/index'));

sequelize
  .sync()
  .then(() => {
    app.listen(3001, () => {
      console.log(`Server listening on port ${env.app.port || 3001}!`);
    });
  })
  .catch(error => console.log(error));
