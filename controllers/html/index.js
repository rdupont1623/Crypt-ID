const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const authRoutes = require('./auth');
const postRoutes = require('./postRoutes');

router.use('/', homeRoutes);
router.use('/auth', authRoutes);
router.use('/post', postRoutes);

module.exports = router;