const router = require('express').Router();
const { Post, Category, User, Tag } = require('../../models');

router.get('/', async (req, res) => {
    // or direct to page with all posts
    try {
        // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => Post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('blog', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/:category', async (req, res) => {
    try {
        // grab category passed into route and find the table item that matches
        const categoryData = await Category.findAll({
            where: { category_name: req.params.category }
        });
        
        // for some reason it needs to be stringified and then parsed in order to return the correct info
        const stringified = JSON.stringify(categoryData);
        
        const categoryParsed = JSON.parse(stringified);
        
        // return item name and id
        // these might not get used 
        const category_name = categoryParsed[0].category_name;
        const categoryId = categoryParsed[0].id;
        
        const posts = await Post.findAll({
            // find all posts with that category id
            where: { category_id: categoryId },
            include:  [
                {
                    model: User,
                    attributes: ['username'],
                },
            ]
        })
        console.log("\x1b[35m%s\x1b[0m", "posts", posts[0].dataValues);


        // render the blog page with these posts on it
        res.render('blog', {
            posts,
            logged_in: req.session.logged_in
        })
    }
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;