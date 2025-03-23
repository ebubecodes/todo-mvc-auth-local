module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {  // part of passport.js "strategy"
        return next()
      } else {
        res.redirect('/')
      }
    }
  }
  