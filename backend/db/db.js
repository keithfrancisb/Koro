const pgp = require('pg-promise')();
const db = pgp('SQLKORA://postgres:123@localhost:3001/kora');

module.exports = db;
