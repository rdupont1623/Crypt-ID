const { Post } = require('../models');

const postData = [
  {
    "username": "0",
    "report": "I found myself in the woods late at night last Thursday. I heard a weird noise that sounded like a mix between a cat and a whale. I'm pretty sure it was the mothman because now I have pinkeye...",
    "coordinates": 5000,
    "timeSeen":"2021-01-12 03:45",
    "timeFiled":"2021-01-15 15:42:57",
    "tags": ["screech", "woods", "mothman"]
    
  },
  {
    "username": "1",
    "report": "No one can convince me that my great-uncle is anything other than the reincarnation of Dracula. He hates garlic and he never crosses the threshold of a home. He also never leaves his own home, but that's only coincedental.",
    "coordinates": 10000,
    "timeSeen": null,
    "timeFiled":"2020-11-05 12:16:32",
    "tags":["vampire", "garlic"]
  },
  {
    "username": "2",
    "report": "I saw a golumn-like creature under the Zakim Bridge last night. It asked me for change for the bus, but I'm pretty sure it was going to use it on drugs.",
    "coordinates": 800,
    "timeSeen":"2019-04-23 16:37",
    "timeFiled":"2019-04-23 06:35:03",
    "tags":["golumn", "boston", "walkinhere"]
  }
];

const seedPosts = () => Product.bulkCreate(postData);

module.exports = seedPosts;

