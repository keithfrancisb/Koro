const db = require('./backend/db/db');
const express = require('express');
const path = require('path');
const app = express();


const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/users', (req, res) => {
  if(Object.values(req.query).length < 1) {
    db.getAllUsers()
      .then(data => res.send(data))
      .catch(error => console.log(error));
  } else {
      if(req.query.email) {
        db.getEmail(req.query.email)
          .then(data => res.send(data))
          .catch(error => console.log(error));
      }
    }
});
