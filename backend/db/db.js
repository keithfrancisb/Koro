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

const getEmail = (email) => {
  const sql = `
    SELECT
      *
    FROM
      public."tblUsers"
    WHERE
      "email"  = $1
  `;

  return db.one(sql, email);
};

const postUser = (email, password) => {
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
  getEmail,
  postUser
};
