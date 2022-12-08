const express = require('express');
const { db } = require('./connect');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

db.connect((err) => {
  if (err) {
    console.error('Postgres connection error', err.stack)
  } else {
    console.log('connected to Postgres')
  }
})

app.post('/register', (req,res) => {
    console.log("post called")
    const fullname = req.body.fullname
    const username = req.body.username
    const password = req.body.password
    const mailingaddress = req.body.mailingaddress
    const branch = req.body.branch  // branch is to be entered as an ID
    db.query("INSERT INTO customer(name, username, passwd, addr, branch) VALUES($1,$2,$3,$4,$5);",
    [fullname,username,password,mailingaddress,branch],
    (err,result) => {
        console.log(err);
    }
    )
})

app.post('/login', (req,res) => {
    console.log("TODO: Login")
})

app.listen(3001, () => {
  console.log('running server')
})