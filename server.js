const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const app = express();
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const image = require('./controllers/image');
const profile = require('./controllers/profile');

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_URL,
  },
});

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.json(db.users);
});

app.post('/signin', (req, res) => {
  signin.handleSignIn(req, res, db, bcrypt);
});

app.post('/register', (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.post('/profile', (req, res) => {
  profile.handleProfileGet(req, res, db, bcrypt);
});

app.put('/image', (req, res) => {
  image.handleImageGet(req, res, db, bcrypt);
});
app.put('/imageurl', (req, res) => {
  image.handleClarifaiFace(req, res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
