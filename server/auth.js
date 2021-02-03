const requireLogin = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/unathorized')
    }
}

module.exports = {
    requireLogin
}