var mysql = require('promise-mysql');
var pool;
 
pool = mysql.createPool({
  host: "localhost",
  user: "ragadmin",
  password: "ragadmin123",
  database: "dbsoundarya",
  connectionLimit: 10,
  connectTimeout  : 60 * 60 * 1000,
  aquireTimeout   : 60 * 60 * 1000,
  timeout         : 60 * 60 * 1000,
});

//dgadmin123

 export default  pool;