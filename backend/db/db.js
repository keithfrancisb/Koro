var pgp = require('pg-promise')()
var db = pgp('SQLKORA://postgres:123@127.0.0.1:3001/kora')

const getAllUsers = () => {

    const sql = `
      SELECT * FROM public."tblUsers"
  `;

  return db.any(sql);

};

const getEmail = (email) => {
  const sql = `
    SELECT * FROM public."tblUsers" WHERE "email" = $1
  `;

  return db.one(sql, email);
}

const postUser = (email, password) => {
  const sql = `
    INSERT INTO public."tblUsers" ("email", "passwordDigest") VALUES($1, %2)
  `;
  return db.none(sql, email, password);
};

module.exports = {
  getAllUsers,
  getEmail
};