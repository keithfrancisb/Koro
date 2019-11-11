const express = require('express');
const path = require('path');
const app = express();

const user = require('./backend/db/user_dao');
const q = require('./backend/db/question_dao');
const a = require('./backend/db/answer_dao');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

// --------------------------------------------------------------- USER ENDPOINTS

app.get('/api/users', (req, res) => {
  if(Object.values(req.query).length < 1) {
    user.getAllUsers()
      .then(data => res.status(200).json(data))
      .catch(error => console.log(error));
  } else {
    const { email, password } = req.query;
    if(email && password) {
      user.login(email, password)
        .then(({email, userID}) => res.status(200).json({email,userId:userID}))
        .catch(error => res.status(403).send('Login Failed!'));
    }
  }
});

app.post('/api/users', (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    res.status(400).send('Email and/or Password is invalid');
  }
  user.signup(email, password)
    .then(({email, userID}) => res.status(200).json({email,userId:userID}))
    .catch(error => {
      console.log(error);
      res.status(400).send('Signing up Failed!')
    });
});

// --------------------------------------------------------------- QUESTION ENDPOINTS

app.get('/api/questions', (req, res) => {
  const { email } = req.query;

  if(!email) {
    q.getAllQuestions()
      .then(questions => res.status(200).json(questions))
      .catch(error => res.status(400).send(new Error(error)))
  } else {
    q.getUserQuestions(email)
      .then(questions => res.status(200).json(questions))
      .catch(error => res.status(400).send(new Error(error)))
  }
});

app.post('/api/questions', (req, res) => {
  const { userId, question } = req.body;

  if(!userId || !question) {
    res.status(400).send(new Error('Invalid userId and/or question'));
  }

  q.addQuestion(userId, question)
    .then(({question_id}) => {
      return q.getQuestion(question_id);
    })
    .then(questionData => res.status(200).json(questionData))
    .catch(error => res.status(400).send(new Error(error)));
});

// --------------------------------------------------------------- ANSWER ENDPOINTS

app.get('/api/answers', (req, res) => {
  const { questionId } = req.query;

  if(!questionId) {
    a.getAllAnswers()
      .then(answers => res.status(200).json(answers))
      .catch(error => res.status(400).send(new Error(error)))
  } else {
    a.getQuestionAnswers(questionId)
      .then(answers => res.status(200).json(answers))
      .catch(error => resizeTo.status(400).send(new Error(error)))
  }
});

app.post('/api/answers', (req, res) => {
  const { userId, questionId, answer } = req.body;

  if(!userId || !questionId || !answer) {
    res.status(400).send(new Error('Invalid userId, questionId, and/or answer'));
  }

  q.addQuestion(userId, questionId, answer)
    .then(() => res.status(200).json({userId, question, answer}))
    .catch(error => res.status(400).send(new Error(error)));
});
