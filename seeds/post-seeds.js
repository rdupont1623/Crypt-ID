const { Post, Tag, User } = require('../models');

const seedPosts = async () => {

  const randomCalc = (array) => array[Math.floor(Math.random() * array.length)].id;
  const [ users, tags ] = await Promise.all([ User.findAll(), Tag.findAll() ])

  const postData = [
    {
      report: "I found myself in the woods late at night last Thursday. I heard a weird noise that sounded like a mix between a cat and a whale. I'm pretty sure it was the mothman because now I have pinkeye...",
      description:"noise that sounded like a mix between a cat and a whale",
      location: "Dallas",
      timeSeen: "2021-01-12 03:45",
      timeFiled: "2021-01-15 15:42:57",
      category_id: 2,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "No one can convince me that my great-uncle is anything other than the reincarnation of Dracula. He hates garlic and he never crosses the threshold of a home. He also never leaves his own home, but that's only coincedental.",
      description:"he's my great-uncle, so, like, old?",
      location: "Alaska",
      timeSeen: null,
      timeFiled: "2020-11-05 12:16:32",
      category_id: 3,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "I saw a golumn-like creature under the Zakim Bridge last night. It asked me for change for the bus, but I'm pretty sure it was going to use it on drugs.",
      description:"golumn-like creature",
      location: "Boston",
      timeSeen: "2019-04-23 16:37",
      timeFiled: "2019-04-23 06:35:03",
      category_id: 1,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "A bog body was discovered last week in the bog near my gran's house. It looks a lot to me like a classic reptillian. They found it when they were mining for pete in the highlands. Pete the moss, not the person...",
      description:"tall, lizard-like. long fingernails. ugly",
      location: "Glasgow",
      timeSeen: "2021-08-12 12:30",
      timeFiled: "2021-08-17 15:42:57",
      category_id: 1,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "My family home is being haunted by some douche bag that looks like Popeye. I can hear him talking about spinach every night while we eat dinner. It's disgusting. I've always been more of a kale person myself.",
      description:"bald, short, with one bum eye. Always holding an unlit pipe in his mouth",
      location: "New Orleans",
      timeSeen: null,
      timeFiled: "2021-01-15 15:42:57",
      category_id: 2,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "I met this guy this one time who said he went camping and Bigfoot shook his tent to keep him up all night. He said it smelled like a swamp and must have been at least 8 ft tall to be able to reach the top of his tent.",
      description:"tall, hairy, stinky. Ape-like hands",
      location: "Dallas",
      timeSeen: "2021-01-12 03:45",
      timeFiled: "2021-01-15 15:42:57",
      category_id: 1,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "not sure if this is the right spot to post this, but there's something weird with my bootcamp instructors. One of them is constantly mountain biking and the other one is just named 'Bobby'. That's weird, right?",
      description:"web developers. it's terrible.",
      location: "University of New Hampshire",
      timeSeen: null,
      timeFiled: "2021-09-06 19:20",
      category_id: 4,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
  ];

  try {
    await Post.bulkCreate(postData, { logging: console.log });
  }
  catch (err) {
    console.error(err);
    throw err;
  }

};


module.exports = seedPosts;

