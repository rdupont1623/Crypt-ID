const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  req.session.logged_in = true
  if (!req.session.logged_in) {
    res.redirect('/auth/login');
  } else {
    next();
  }
};

module.exports = withAuth;
