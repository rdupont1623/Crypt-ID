const router = require('express').Router();

router.get('/', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    req.session.logged_in;
    if (req.session.logged_in) {
        res.redirect('/create');
        return;
    }

    res.render('login');
});

module.exports = router;