const express = require('express'),
  path = require('path'),
  cons = require('consolidate'),
  bodyParser = require('body-parser'),
  pg = require('pg'),
  app = express();

var knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'onboarding',
    password: 'joshx1d',
    database: 'onboardingDB',
    charset: 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

let User = bookshelf.Model.extend({ tableName: 'users' });

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  new User({
    username: 'guy',
    password: 'guy1',
    zip: 94034
  }).save();
  res.send({ hello: 'boddd' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
