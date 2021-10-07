const { Category } = require('../models');

const categoryData = [
    {
        category_name: "cryptid"
    },
    {
        category_name: "paranormal"
    },
    {
        category_name: "ufo"
    },
    {
        category_name: "other"
    }
]
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
