const db = require("../data/dbConfig");

module.exports = {
  findUsersAuth,
  findUserAuthById,
  findUserAuthByUserName,
  addUserAuth
};

function findUsersAuth() {
  return db("usersAuth3");
}

function findUserAuthById(id) {
  return db("usersAuth3")
    .where({ id })
    .first();
}

function findUserAuthByUserName(userName) {
  return db("usersAuth3")
    .where({ userName })
    .first();
}

function addUserAuth(userAuth) {
  return db("usersAuth3")
    .insert(userAuth, "id")
    .then(ids => {
      const [id] = ids;
      return findUserAuthById(id);
    });
}
