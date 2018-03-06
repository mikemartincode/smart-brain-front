const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: process.env.API_KEY,
});
const handleClarifaiFace = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json('Unable to work api'));
};

const handleImageGet = (req, res, db, bcrypt) => {
  const {id} = req.body;
  db('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then((entries) => {
      res.json(entries[0]);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  handleImageGet: handleImageGet,
  handleClarifaiFace: handleClarifaiFace,
};
