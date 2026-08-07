function authMiddleware(req, res, next) {
  // check session
  next();
}

module.exports = { authMiddleware };
