const pgp = require('pg-promise')();
const db = pgp('SQLKORA://postgres:!23Preoccupied@localhost:3001/kora');

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
  const sql = `
    INSERT INTO
      public."tblUsers"
      ("email", "passwordDigest")
    VALUES
      ($1, $2)
  `;

  return db.none(sql, [email, password]);
};

module.exports = {
  getAllUsers,
  getEmail,
  postUser
};
