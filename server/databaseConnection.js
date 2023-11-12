//elephantsql.com
var pg = require('pg');
require('dotenv').config({ debug: process.env.DEBUG });
var client = new pg.Client(process.env.DB_URL);


// for local connection
// const client = new Client({
//     host: 'my.database-server.com',
//     port: 5334,
//     database: 'database-name',
//     user: 'database-user',
//     password: 'secretpassword!!',
// })

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
  });

});

module.exports = client;

// example
// const client = require('./elephantsql');
// app.get('/', async (req, res) => {
//     try {
//         const results = await client.query('SELECT * FROM accounts');
//         res.json(results);
//     } catch (err) {
//         console.log(err);
//     }
// })