
const db = require('./db');
const bcrypt = require('bcrypt');

const saltRounds = 2;

const getAllUsers = () => {
  const sql = `
    SELECT
      *
    FROM
      public."tblUsers"
  `;

  return db.any(sql);
};

const login = (email, password) => {

  const sql = `
    SELECT
      *
    FROM
      public."tblUsers"
    WHERE
      "email"  = $1
  `;

  return db.one(sql, email).then(user => {
    if(user.email) {
      const match = bcrypt.compare(password, user.passwordDigest)
        .then(res => res);
      if(match) {
        const {email, userID} = user;
        return {email, userID};
      } else {
        throw new Error('Login Failed!');
      }
    }
  });
};

const signup = (email, password) => {
  return bcrypt.hash(password, saltRounds)
    .then(hash => {
      const sql = `
        INSERT INTO
          public."tblUsers"
          ("email", "passwordDigest")
        VALUES
          ($1, $2)
        RETURNING
          "userID",
          "email"
      `;
      return db.one(sql, [email, hash])
        .then(user => user);
    });
};

module.exports = {
  getAllUsers,
  signup,
  login
};
