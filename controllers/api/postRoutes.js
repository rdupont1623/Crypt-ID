const router = require('express').Router();
const { Post, User, Tag } = require('../../models');
const withAuth = require('../../utils/auth');

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

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, (req, res) => {
  // update a tag by its `id` value
    Tag.update(
        req.body,
        {where: { id: req.params.id } 
    })
    .then((tag) => 
    {res.status(200).json(tag)})
    .catch((err) => res.status(500).json(err))
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });
    if (!post) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
