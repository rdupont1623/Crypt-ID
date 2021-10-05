const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const authRoutes = require('./authRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/', homeRoutes);
router.use('/login', authRoutes);
router.use('/blog', blogRoutes);

module.exports = router;