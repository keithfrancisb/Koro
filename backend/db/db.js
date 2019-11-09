const pgp = require('pg-promise')();
const db = pgp('SQLKORA://postgres:!23Preoccupied@localhost:3001/kora');
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
        return user.email;
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
      `;
      return db.none(sql, [email, hash]);
    });
};

module.exports = {
  getAllUsers,
  signup,
  login
};
