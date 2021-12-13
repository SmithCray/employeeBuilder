const inquirer = require("inquirer");
const fs = require("fs");

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

function init() {
  inquirer
    .prompt(mainMenu)
    .then((menuData) => {
      console.log(menuData);
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
