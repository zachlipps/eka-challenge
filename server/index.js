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

app.use(express.static('client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/oboarding', (req, res) => {
  const {
    sessionID,
    username,
    password,
    phone,
    firstName,
    lastName
  } = req.body;

  new User({ id: sessionID }).then(function(model) {
    if (model === null) {
      new User({
        username,
        password,
        phone,
        firstName,
        lastName
      }).save();
    } else {
      model
        .set({
          username,
          password,
          phone,
          firstName,
          lastName
        })
        .save()
        .then(model => {
          res.send({ id: model.sessionID });
        });
    }
  });
  res.send({ sessionID });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
