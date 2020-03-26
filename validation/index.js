const Validator = require('validator');
const IsEmpty = require('is-empty');

module.exports = function validateUserRegistration(registration) {
  let errors = {};

  registration.username = !IsEmpty(registration.username)
    ? registration.username
    : '';
  registration.password = !IsEmpty(registration.password)
    ? registration.password
    : '';
  registration.password2 = !IsEmpty(registration.password2)
    ? registration.password2
    : '';

  if (Validator.isEmpty(registration.username)) {
    errors.username = 'Username is required.';
  }

  if (Validator.isEmpty(registration.password)) {
    errors.password = 'A Password is required.';
  }

  if (Validator.isEmpty(registration.password2)) {
    errors.password2 = 'Confirm password is required.';
  }

  if (!Validator.isLength(registration.password, { min: 8, max: 20 })) {
    errors.password = 'Your password must be at least 8 characters.';
  }
  if (!Validator.equals(registration.password, registration.password2)) {
    errors.password2 = 'The passwords do not match.';
  }

  return errors;
};
