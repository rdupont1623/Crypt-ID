const seedUser = require('./user-seeds');
const seedCategories = require('./category-seeds');
const seedPosts = require('./post-seeds');
const seedTags = require('./tag-seeds');
const seedPostTags = require('./post-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n')

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedPosts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedPostTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
