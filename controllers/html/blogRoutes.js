const router = require('express').Router();
const Post = require('../../models/post');
const Category = require('../../models/category');

router.get('/', async (req, res) => {
    // direct to page with button options
    // or direct to page with top posts (sprinkles)
    try {
        const allPosts = await Post.findAll({
            attributes: [user_id, timeFiled, report, desctription, timeSeen] 
        })
        // how to add allPosts to blog?
    }
    catch(err)  {
        res.status(500).json(err)
    }
    res.render(blog)
});

router.get('/cryptids', async (req, res) => {
    try {
        // find the associate category id
        const categoryId = await Category.findByPk({
            where: {category_name: 'cryptids'}
        })
        const posts = await Post.findAll({
            where: {category_id: categoryId}
        })
        console.log(posts)
        // find all posts with that category id
        // render the blog page with these posts on it
        res.render('blog')
    }
    catch(err)  {
        res.status(500).json(err)
    }
});

router.get('/paranormal', (req, res) => {

});

router.get('/ufo', (req, res) => {

});

router.get('/other', (req, res) => {

});

module.exports = router;