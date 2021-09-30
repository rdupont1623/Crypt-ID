const { User } = require('../models');

const userData =[
  {
    "name": "neckbeard54",
    "email": "chickmagnet@friendzone.com",
    "password": "sup3rSecure571"
  },
  {
    "name": "sasquatchbeliever",
    "email": "coderedmtdew@momsbasement.org",
    "password": "get0ffmyL@wn"
  },
  {
    "name": "badsmells297",
    "email": "plantdaddy@gmail.com",
    "password": "BestPasswordOutThere"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

