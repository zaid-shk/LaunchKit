function authMiddleware(req, res, next) {
    // authenticate user
    next();
}

module.exports = { authMiddleware };
