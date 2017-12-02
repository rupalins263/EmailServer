var mysql = require('promise-mysql');
var pool;
 
pool = mysql.createPool({
  host: "148.66.137.19",
  user: "db_soundaryainst",
  password: "dbsoundadmin@123",
  database: "db_soundaryainst",
  connectionLimit: 10,
  connectTimeout  : 60 * 60 * 1000,
  aquireTimeout   : 60 * 60 * 1000,
  timeout         : 60 * 60 * 1000,
});

//dgadmin123

 export default  pool;