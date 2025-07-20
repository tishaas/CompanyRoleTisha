const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send("No token provided.");

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).send("Failed to authenticate token.");
    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;