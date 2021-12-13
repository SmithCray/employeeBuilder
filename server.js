const express = require("express");

const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_db",
  },
  console.log(`Connected to the employee database!`)
);

db.query("SELECT * FROM department", function (err, results) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

db.query("SELECT * FROM roles", function (err, results) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

db.query("SELECT * FROM employee", function (err, results) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
