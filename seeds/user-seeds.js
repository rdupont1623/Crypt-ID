const { User } = require('../models');

const userData =[
  {
    username: "neckbeard54",
    email: "chickmagnet@friendzone.com",
    password: "sup3rSecure571"
  },
  {
    username: "sasquatchbeliever",
    email: "coderedmtdew@momsbasement.org",
    password: "get0ffmyL@wn"
  },
  {
    username: "badsmells297",
    email: "plantdaddy@gmail.com",
    password: "BestPasswordOutThere"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

