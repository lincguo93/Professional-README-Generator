const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title going to be?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a project description: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Can you tell how to install?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage directions: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose license type:',
        choices: ["MIT", "Public", "copyleft", "lpgl", "proprietary"]
    },
    {
        type: 'input',
        name: "contributors",
        message: "Enter contibutors:"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data), function(err){
        if (err) {
            throw err;
          };
    
          console.log("New README created!");
        }
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile('README.md', generateMarkdown({...response}))    
    });
};

// function call to initialize program
init();
