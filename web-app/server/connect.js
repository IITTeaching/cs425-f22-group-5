const { Client } = require('pg');

const db = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    port: 5432,
    database: 'postgres'
  });

// db.connect().then(db.query('INSERT INTO customer(name, passwd, addr, branch) VALUES($1,$2,$3,$4);',
// ['charles','password','3223 S calumet ave','141'],
// (err,result) => {
//     console.log(err);
// }
// ));

module.exports = { db };