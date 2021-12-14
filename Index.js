const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_db",
  },
  console.log(`Connected to the employee database!`)
);

const mainMenu = [
  {
    type: "list",
    message: "Please choose an option provided.",
    name: "menuPrompt",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update employee role",
    ],
  },
];

function viewDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });
}

function viewRoles() {
  db.query("SELECT * FROM roles", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });
}

function viewEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please name the department you'd like to add",
        name: "departmentPrompt",
      },
    ])
    .then((departmentData) => {
      db.query(
        "INSERT INTO department SET name = ?",
        departmentData.departmentPrompt,
        function (err, results) {
          if (err) {
            console.log(err);
          }
          console.log(results);
          viewDepartments();
        }
      );
    });
}

function addRole() {
  //query to department table
  //once you have the results, think how you can turn/add/push it into an array because choices in prompt only accept arrays
  //the array needs to contain the results, add that results to the choices in the last question.
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please name the role you'd like to add",
        name: "rolePrompt",
      },
      {
        type: "input",
        message: "Please enter the salary of this role",
        name: "salaryPrompt",
      },
      // {
      //   type: "input",
      //   message: "Please enter the department ID of this role",
      //   name: "deptPrompt",
      // },
      {
        type: "list",
        message: "Please enter the department ID of this role",
        name: deptPrompt,
        choices: [],
      },
    ])
    .then((roleData) => {
      db.query(
        "INSERT INTO roles SET title = ?, salary = ?, department_id = ?",
        [roleData.rolePrompt, roleData.salaryPrompt, roleData.deptPrompt],
        function (err, results) {
          if (err) {
            console.log(err);
          }
          console.log(results);
          viewRoles();
        }
      );
    });
}

function addEmployee() {}

function updateEmployeeRole() {}

function init() {
  inquirer
    .prompt(mainMenu)
    .then((menuData) => {
      console.log(menuData);
      switch (menuData.menuPrompt) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update employee role":
          updateEmployeeRole();
          break;
        default:
          console.log("None matched");
      }

      // console.log(generateMarkdown(data));
      // var rawMarkdown = generateMarkdown(data);
      // writeToFile("readme.md", rawMarkdown);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
}

init();
