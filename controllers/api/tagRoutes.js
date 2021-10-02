const router = require('express').Router();
const { Tag, Post, PostTag } = require('../../models');
const withAuth = require('../../utils/auth');

// The `/api/tags` endpoint

router.get('/', withAuth, async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
    try{
        const tags = await Tag.findAll({
        include: [{model: Post}]
        })
        res.json(tags)
    }
    catch{ err => {
        res.status(500).json(err)
        }
    }
});

router.get('/:id', withAuth, async (req, res) => {
  // find a single tag by its `id`
    try {
        const tags = await Tag.findByPk(req.params.id, {
        include:  [{model: Post}]
        })
        res.json(tags)
    }
    catch{
        res.status(404).json(err)
    }
});

router.post('/', withAuth, async (req, res) => {
  // create a new tag
    try {
        const newTag = await Tag.create(req.body)
        res.status(200).json(newTag)
    }
    catch (err) {res.status(500).json(err)}
});

router.put('/:id', withAuth, (req, res) => {
  // update a tag's name by its `id` value
    Tag.update(
        req.body,
        {where: { id: req.params.id } 
    }).then((tag) =>    {
        res.status(200).json(tag)
    }).catch((err) => res.status(500).json(err))
});

router.delete('/:id', withAuth, async (req, res) => {
  // delete on tag by its `id` value
    try {
        const tag = await Tag.destroy({
        where: {id: req.params.id}
        })
        if (!tag) {
        res.status(404).json({ message: 'no tag found with that id.'})
        }
        else    {
            res.status(200).json(tag)
        }
    }
    catch {
        res.status(500).json(err);
    }
});

module.exports = router;
