const handleProfileGet = (req, res, db, bcrypt) => {
  const {id} = req.params;
  db
    .select('*')
    .from('users')
    .where({id})
    .then((user) => {
      console.log(user[0]);
      if (user.length) {
        return res.json(user);
      } else {
        res.status(400).json('Unable to complete request');
      }
    });
};

module.exports = {
  handleProfileGet: handleProfileGet,
};
