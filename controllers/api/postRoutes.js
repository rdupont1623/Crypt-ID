const router = require('express').Router();
const { Post, User, Tag } = require('../../models');
const withAuth = require('../../utils/auth');


// Get all posts - inludes associated User and Tag data
router.get('/', withAuth, async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [ { model: User }, { model: Tag } ]
    })
    res.status(200).json(posts)
  }
  catch(err)  {
    res.status(500).json(err)
  }
});


// Get a Post by ID
router.get('/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [ { model: User }, { model: Tag } ]
      })
      res.json(post)
  }
  catch(err)  {
    res.status(500).json(err)
  }
});


// Creating a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const {report, description, location, timeSeen, category_id} = req.body
    const newPost = await Post.create({report, description, location, timeSeen, user_id: req.session.user_id, category_id});
 
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


  // update a post by its `id` value

router.put('/:id', withAuth, (req, res) => {
    Post.update(
        req.body,
        {where: { id: req.params.id } 
    })
    .then((post) => res.status(200).json(post))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err.toString())})
});


// Delete post by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });
    if (!post) {
      res.status(404).json({ message: 'No report found with this id!' });
      return;
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
