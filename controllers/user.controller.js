const validateUserRegistration = require('../validation');

const db = require('../models');
const User = db.users;

const USER_EXISTS =
  'This username already exists. Please choose a different one.';

exports.create = (request, response) => {
  let errors = validateUserRegistration(request.body);

  if (!errors || Object.keys(errors).length == 0)
    return response.status(400).json(errors);

  User.findOne({ where: { username: request.body.username } }).then(user => {
    if (user) {
      return response.status(400).json({ username: USERNAME_EXISTS });
    } else {
      const newUser = {
        username: request.body.username,
        password: request.body.password
      };

      User.create(newUser)
        .then(result => {
          response.json(result);
        })
        .catch(createError => {
          console.log(createError);
        });
    }
  });
};
