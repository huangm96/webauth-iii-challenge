const express = require("express");
const bcrypt = require("bcryptjs");
const authModel = require("./auth-model.js");
const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");
const router = express.Router();
const restricted = require("./restricted-middleware.js")
const checkDepartment = require('./checkDepartment-middleware.js')


router.get("/api/users", restricted, checkDepartment('Accounting'), (req, res) => {
  authModel
    .findUsersAuth()
    .then(users => {
      if (!users[0]) {
        res.json(null);
        }
        const departmentUsers = users.filter(d => {
           return d.department === "Accounting"
        })
      res.json({loggedInUser:req.user.userName, departmentUsers});
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get users list", error });
    });
});

router.post("/api/register",  (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 14);
  req.body.password = hash;

  authModel
    .addUserAuth(req.body)
    .then(() => {
      res.status(201).json({ message: "Accout created!" });
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to register", error });
    });
});

router.post("/api/login", (req, res) => {
  authModel
    .findUserAuthByUserName(req.body.userName)
    .then(user => {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
          const token = generateToken(user)
          
        res.status(200).json({ message: `Hi! ${user.userName}`,token });
      } else {
        res.status(401).json({ message: "You cannot pass" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to login" }, error);
    });
});

function generateToken(user) {
  const payload = {
    userName: user.userName,
    subject: user.id,
    department: user.department
  };
  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secret.jwtSecret, options);
}
module.exports = router;
