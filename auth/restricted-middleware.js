const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    // check that the token is valid
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
      if (err) {
        // foul play
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        //token is good
        req.user = { userName: decodedToken.userName, department: decodedToken.department };
        next();
      }
    });
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};
