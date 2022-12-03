const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  user: 'postgres',
  host: 'localhost',
  password: 'admin',
  database: 'postgres',
});

app.post('/register', (req,res) => {
    const fullname = req.body.fullname
    const password = req.body.password
    const mailingaddress = req.body.mailingaddress
    const branch = req.body.branch
    db.query("INSERT INTO users (fullname, password) VALUES (?,?)"
    [fullname,password,mailingaddress,branch],
    (err,result) => {
        console.log(err);
    }
    )
})

app.listen(3001, () => {
  console.log('running server')
})