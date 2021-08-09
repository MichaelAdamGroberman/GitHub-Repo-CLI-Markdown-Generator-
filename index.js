// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile)

inquirer;
const promptUser = () => {
  return inquirer
    .prompt([
    {
        type: "input",
        message:
          "Please enter your GitHub username",
        name: "username",
      },
      {
        type: "input",
        message: "What is your Repo/Project's Name?",
        name: "projectName",
      },
      {
        type: "input",
        message:
          "Provide a description of the project",
        name: "description",
      },
      {
        type: "list",
        message: "What kind of license do you want for the project?",
        name: "license",
        choices: ["MIT", "Gpl-3.0", "Unlicense", "Apache-2.0", "None"],
      },
      {
        type: "input",
        message:
          "What do you want to include in the Usage Section of your project?",
        name: "usage",
      },
      {
        type: "input",
        message:
          "Installation instructions for your project:",
        name: "install",
      },
      {
        type: "input",
        message:
          "What do you want the user to know about contributing to your poject?",
        name: "contributing",
      },
      {
        type: "input",
        message: "How can the user run tests for your project?",
        name: "tests",
      }]
      .then(function(answers){
          return answers;
      });
    };
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
