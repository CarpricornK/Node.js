const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '114.108.185.227',
  user: 'root',
  password: 'dbghtmxm1!',
  database: 'Factory_busungcord'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to MySQL!');
});



const Query 1 =
 SELECT name FROM Device WHERE
;

connection.query('SELECT * FROM table_name', function (error, results, fields) {
  if (error) throw error;

  // results 변수에 테이블 데이터가 담깁니다.
  const tableData = results;
});

connection.end();
