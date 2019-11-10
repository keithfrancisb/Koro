const db = require('./db');

const getAllQuestions = () => {
  const sql = `
    SELECT
      tblQ."questionID",
      tblQ."question",
      tblU."email",
      tblQ."timestamp"
    FROM
      public."tblQuestions" as tblQ
    JOIN
      public."tblUsers" as tblU
    ON
      tblU."userID" = tblQ."userID"
  `;

  return db.any(sql);
};

const getUserQuestions = email => {
  const sql = `
  SELECT
    tblQ."questionID",
    tblQ."question",
    tblU."email",
    tblQ."timestamp"
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


const addQuestion = (userId, question) => {
  const sql = `
  INSERT INTO
  public."tblQuestions"
  ("userID", "question", "timestamp")
  VALUES
  ($1, $2, NOW())
  `;

  return db.none(sql, [userId, question]);
}

module.exports = {
  getAllQuestions,
  getUserQuestions,
  addQuestion
};
