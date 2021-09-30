const { Category } = require('../models');

const categoryData = [
    {
        "category_name": "cryptids"
    },
    {
        "category_name": "paranormal"
    },
    {
        "category_name": "ufo"
    },
    {
        "category_name": "other/random"
    }
]
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
