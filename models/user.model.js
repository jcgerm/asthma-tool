module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  User.beforeCreate(function(user, options) {
    return cryptPassword(user.password)
      .then(password => {
        user.password = password;
      })
      .catch(cryptError => {
        if (cryptError) {
          console.log(cryptError);
        }
      });
  });

  function cryptPassword(password) {
    return new Promise(function(resolve, reject) {
      bcrypt.genSalt(10, (saltError, salt) => {
        if (saltError) return reject(saltError);

        bcrypt.hash(password, salt, (hashError, hash) => {
          if (hashError) return reject(hashError);

          return resolve(hash);
        });
      });
    });
  }
};
