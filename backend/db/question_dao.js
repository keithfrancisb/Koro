const db = require('./db');

const getAllQuestions = () => {
  const sql = `
    SELECT
      tblQ.question_id,
      tblQ.question,
      tblU."email",
      tblQ.time_stamp
    FROM
      public.tbl_questions as tblQ
    JOIN
      public."tblUsers" as tblU
    ON
      tblQ.user_id = tblU."userID"
    ORDER BY
      tblQ.time_stamp DESC
  `;

  return db.any(sql);
};

const getUserQuestions = email => {
  const sql = `
  SELECT
    tblQ.question_id,
    tblQ.question,
    tblU."email",
    tblQ.time_stamp
  FROM
    public.tbl_questions as tblQ
  JOIN
    public."tblUsers" as tblU
  ON
    tblQ.user_id = tblU."userID"
  WHERE
    tblU."email" = $1
  ORDER BY
    tblQ.time_stamp DESC
  `;

  return db.any(sql, email);
};

const getQuestion = (questionId) => {
  const sql = `
  SELECT
    tblQ.question_id,
    tblQ.question,
    tblU."email",
    tblQ.time_stamp
  FROM
    public.tbl_questions as tblQ
  JOIN
    public."tblUsers" as tblU
  ON
    tblU."userID" = tblQ.user_id
  WHERE
    tblQ.question_id = $1
  `;

  return db.one(sql, questionId);
};


const addQuestion = (userId, question) => {
  const sql = `
  INSERT INTO
    public.tbl_questions
    (user_id, question, time_stamp)
  VALUES
    ($1, $2, current_timestamp)
  RETURNING
    question_id
  `;

  return db.one(sql, [userId, question]);
}

module.exports = {
  getAllQuestions,
  getUserQuestions,
  getQuestion,
  addQuestion
};
