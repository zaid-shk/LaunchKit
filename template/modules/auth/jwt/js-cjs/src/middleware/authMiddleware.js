function authMiddleware(req, res, next) {
  // verify token
  // attach user
  next();
}

module.exports = { authMiddleware };
