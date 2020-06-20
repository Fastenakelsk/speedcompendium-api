const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const env = require('../env');
const { version: currentVersion } = require('../package.json');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.get('/', (req, res) => {
  res.send(`Speedcompendium API version: ${currentVersion}`);
});

const mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(env.connectionString, mongooseConnectionConfig, () => {
  app.listen(env.port, () => console.log(`Listening on localhost:${env.port}`));
});

module.exports = app;
