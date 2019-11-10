const db = require('./db');

const getAllAnswers = () => {
  const sql = `
    SELECT
      tblA.answer_id,
      tblA.question_id,
      tblU."email",
      tblA.answer,
      tblA.time_stamp
    FROM
      public.tbl_answers as tblA
    JOIN
      public."tblUsers" as tblU
    ON
      tblU."userID" = tblA.user_id
  `;

  return db.any(sql);
};

const getQuestionAnswers = questionId => {
  const sql = `
  SELECT
    tblA.answer_id,
    tblA.question_id,
    tblU."email",
    tblA.answer,
    tblA.time_stamp
  FROM
    public.tbl_answers as tblA
  JOIN
    public."tblUsers" as tblU
  ON
    tblU."userID" = tblA.user_id
  WHERE
    tblA.question_id = $1
  `;

  return db.any(sql, questionId);
};

module.exports = {
  getAllAnswers,
  getQuestionAnswers
};
