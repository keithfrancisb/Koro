const pgp = require('pg-promise')();
const db = pgp('SQLKORA://postgres:!23Preoccupied@localhost:3001/kora');

module.exports = db;
