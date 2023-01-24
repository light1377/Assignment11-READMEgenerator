const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // "Project title?",
    // "Project description?"
    // inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
    },

    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Describe your project?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can it be tested?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ["MIT", "Apache", "GPL", "BSD"]
        // defult: 0
    },
    {
        type: 'input',
        name: 'contents',
        message: 'What are the contents of youyr project?',
    },
]
//.then((data) => {

// const {name, location} = data;
// const mdContent = `
// <title>${data.title}</title>
// <h1>${data.title}</h1>
// Project Details:
// <br>
// <p> Description: ${data.decription}</p>

// `
//})
//;

// function to write README file
function writeToFile(fileName, data) {
    const { title, username, email, description, installation, contribute, tests, license, contents } = data;
    fs.writeFile("index.html", markup) = {
        //err? console.log(err) ; 
        console.log("Success");

    };
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const { title, usernme, email, description, installation, contribute, tests, license, contents } = data;
            console.log(data);
            writeToFile(title, data);
                });
}

init();

