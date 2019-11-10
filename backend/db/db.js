const pgp = require('pg-promise')();
<<<<<<< HEAD
const db = pgp('SQLKORA://postgres:123@localhost:3001/kora');
const bcrypt = require('bcrypt');
=======
const db = pgp('SQLKORA://postgres:!23Preoccupied@localhost:3001/kora');
>>>>>>> 580f6cd037021d1501e3492b9b8c26e7d3082f2b

module.exports = db;
