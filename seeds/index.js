const seedUser = require('./user-seeds');
const seedCategories = require('./category-seeds');
const seedPosts = require('./post-seeds');
const seedTags = require('./tag-seeds');
const seedPostTags = require('./post-tag-seeds');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  console.log('seed db');
  
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n')

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedPostTags();
  console.log('\n----- POST TAGS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
