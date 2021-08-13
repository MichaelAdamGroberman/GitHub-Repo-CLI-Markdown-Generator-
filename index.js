// included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is title of your project? ',
        validate: titleInput => {
            if (titleInput) {
                return true;
                } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description ',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Enter the installation instructions ',
        validate: installInstructionsInput => {
            if (installInstructionsInput) {
                return true;
            } else {
                console.log('You need to include install instructions.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'appUsage',
        message: 'Enter the usage information ',
        validate: appUsageInput => {
            if (appUsageInput) {
                return true;
            } else {
                console.log('You need to include usage information.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'howToContribute',
        message: 'Enter the contribution guidelines ',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Enter the test instructions ',
    },
    {
        type: 'list',
        message: 'Choose a license type for the application ',
        name: 'licenseType',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licenseTypeInput => {
            if (licenseTypeInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'What is your GitHub username? ',
        validate: gitHubUserInput => {
            if (gitHubUserInput) {
                return true;
            } else {
                console.log('Valid GitHub Username is required!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address? ',
        validate: function (email) {
            // Regex mail check (return true if valid mail)
            const isValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            return isValid ? true : "A valid email address is required!";
        }
    }
];

// Function to write README file
function writeToFile(fileName, data) { 
    const content = generateMarkdown(data);
    fs.writeFile(fileName, content, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const filename = `generatedREADME.md`;
            writeToFile(filename, data);
        });
}

// Function call to initialize app
init();