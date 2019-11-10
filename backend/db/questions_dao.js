const db = require('./db');

const getAllQuestions = () => {
  const sql = `
    SELECT
      *
    FROM
      public."tblQuestions"
  `;

  return db.any(sql);
};

const getUserQuestions = email => {
  const sql = `
  SELECT
    tblQ."question",
    tblQ.timestamp
  FROM
    public."tblQuestions" as tblQ
  JOIN
    public."tblUsers" as tblU
  ON
    tblQ."userID" = tblU."userID"
  WHERE
    tblU."email" = $1;
  `;

  return db.any(sql, email);
};

module.exports = {
  getAllQuestions,
  getUserQuestions
}
