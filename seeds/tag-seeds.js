const { Tag } = require('../models');

const tagData = [
    {
        tag_name: "screech"
    },

    {
        tag_name: "woods"
    },
    
    {
        tag_name: "mothman"
    },
    
    {
        tag_name: "vampire"
    },
    
    {
        tag_name: "garlic"
    },
    
    {
        tag_name: "golumn"
    },
    
    {
        tag_name: "boston"
    },
    
    {
        tag_name: "walkinhere"
    },
    
    {
        tag_name: "lochness"
    },
    
    {
        tag_name: "alien"
    },
    
    {
        tag_name: "ghost"
    }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
