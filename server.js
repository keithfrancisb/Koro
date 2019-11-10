const express = require('express');
const path = require('path');
const app = express();
const user = require('./backend/db/user_dao');
const q = require('./backend/db/questions_dao');

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
        .then(email => res.status(200).json(email))
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
    .then(() => res.status(200).send(true))
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
      .catch(error => console.log(error));
  } else {
    q.getUserQuestions(email)
      .then(questions => res.status(200).json(questions))
      .catch(error => console.log(error));
  }
})
