const { Post } = require('../models');

const postData = [
  {
    id: "0",
    report: "I found myself in the woods late at night last Thursday. I heard a weird noise that sounded like a mix between a cat and a whale. I'm pretty sure it was the mothman because now I have pinkeye...",
    location: 5000,
    timeSeen:"2021-01-12 03:45",
    timeFiled:"2021-01-15 15:42:57",
    category_id: 2,
    user_id: 1,
    tag_id: 2
  },
  {
    id: "1",
    report: "No one can convince me that my great-uncle is anything other than the reincarnation of Dracula. He hates garlic and he never crosses the threshold of a home. He also never leaves his own home, but that's only coincedental.",
    location: 10000,
    timeSeen: null,
    timeFiled:"2020-11-05 12:16:32",
    category_id: 3,
    user_id: 2,
    tag_id: 5
  },
  {
    id: "2",
    report: "I saw a golumn-like creature under the Zakim Bridge last night. It asked me for change for the bus, but I'm pretty sure it was going to use it on drugs.",
    location: 800,
    timeSeen:"2019-04-23 16:37",
    timeFiled:"2019-04-23 06:35:03",
    category_id: 1,
    user_id: 3,
    tag_id: 6
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

