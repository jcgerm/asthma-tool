const express = require('express');
const bodyParser = require('body-parser');

const users = require('./routes/user.routes');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

const db = require('./models');
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

// simple route
app.use('/api/users', users);

app.post('/', (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
