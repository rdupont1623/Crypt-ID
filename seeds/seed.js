const sequelize = require('../config/connection');
const { User, Post, Tag, Category, PostTag } = require('../models');

const userData = require('./user-seeds');
const categoryData = require('./category-seeds');
const projectData = require('./post-seeds');
const tagData = require('./tag-seeds');
const seedUser = require('./user-seeds');

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
