const { Category } = require('../models');

const categoryData = [
    {
        category_name: "Cryptid"
    },
    {
        category_name: "Paranormal"
    },
    {
        category_name: "UFO"
    },
    {
        category_name: "other/random"
    }
]
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
