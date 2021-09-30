const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/posts', postRoutes);
router.use('/tags', tagRoutes)

module.exports = router;
