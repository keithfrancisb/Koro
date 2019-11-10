const pgp = require('pg-promise')();
const db = pgp('SQLKORA://postgres:123@localhost:3001/kora');
const bcrypt = require('bcrypt');

module.exports = db;
