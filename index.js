const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const util = require('util');

//const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require("./utils/generateMarkdown");

const questions = () =>
inquirer.prompt([

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

    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'What are the installation instructions?',
    // }
    // {
    //     type: 'input',
    //     name: 'dependecies',
    //     message: 'How can we install the dependencies?',
    // }
    // {
    //     type: 'input',
    //     name: 'contribute',
    //     message: 'How can others contribute?',
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: 'How can it be tested?',
    // },
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: 'What license does your project use?',
    //     choices: ["MIT", "APACHE", "GPL", "BSD","none"]
    //     },
    // {
    //     type: 'input',
    //     name: 'contents',
    //     message: 'What are the contents of your project?',
    // },
]);
const generateReadme = (answers) =>
`<title>${answers.title}</title>
<h1>${answers.title}</h1>
Project Details:
<br>
<p> Description: ${data.description}</p>`

// .then((data) => {

// const {name, description} = data;
// const mdContent = `
// <title>${data.title}</title>
// <h1>${data.title}</h1>
// Project Details:
// <br>
// <p> Description: ${data.description}</p>

// `;

questions()
.then((answers) = writeFileAsync('ReadmeGen.md', generateReadme(answers)))
.then(() => console.log('README generated!'))
.catch((err) => console.error(err))



// // function to write README file
// function writeToFile(fileName, data) {
//     const { title, username, email, description, installation, contribute, tests, license, contents } = data;
//     fs.writeFile("index.html", markup) = {
//         //err? console.log(err) ; 
//         console.log("Success");

//     };
// }

// // function to initialize program
// function init() {
//     inquirer
//         .prompt(questions)
//         .then((data) => {
//             const { title, usernme, email, description, installation, contribute, tests, license, contents } = data;
//             console.log(data);
//             writeToFile(title, data);
//         });
// }

// from activity 9 of class 2:
//.then((response) =>
// response.confirm === response.password
//   ? console.log('Success!')
//   : console.log('You forgot your password already?!')
// );
// from activity 10 of class 2:
// .then((data) => {
//     const filename = `${data}.json`;
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//     err ? console.log(err) : console.log('Success!')
// );
// });

