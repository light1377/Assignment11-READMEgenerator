const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

//not sure what this line does but it seems the generator can work without it:
//const generateMarkdown = require("./utils/generateMarkdown");

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
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'dependecies',
        message: 'How can we install the dependencies?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can the project be tested?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ["MIT", "APACHE", "GPL", "BSD", "none"],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can this project be used?',
    },
])
    // .then(function (responses) {
    //     for(let i = 0; i < responses.channels; i++) {
    //         if (responses.license === 0) {
    //             console.log("You are probably smart");
    //         }}
    //     })
    .then((data) => {
        console.log(data);
        
        const { title, contents, username, email, description, installation, dependencies, contribute, tests, license, usage } = data;

        static licenseBadge(license){
            const badges = {
                mit:"[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                apache:"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                gpl:"[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
                bsd:"[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
                none: ""
            }
            return badges[license]
        
        }

        
        // const li = data.license;
        // let x = li
        // console.log(li);
        // if (li === "MIT") {
        //     console.log("MITTTTTTTT")
        //     let x = "[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        // }
        // else if (li === "APACHE") {
        //     console.log("APACHEEE");
        //     x = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        // }
        // else if (li === "GPL") {
        //     console.log("GPLLLLL");
        //     x = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
        // }
        // else if (li === "BSD") {
        //     console.log("BSDDDDDD");
        //     x = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        // }
        // else if (li === "none") {
        //     console.log("no license");
        // }
        // console.log(x);



        // const licenses:
        // this.MIT = [![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT),
        // this.APACHE =
        // this.GPL = 
        // this.BSD = 



        const mdInput = `
# ${title}

## Description:
${description}
<br>
## Contents:
<ul>
<li>[Installation](#installation)</li>
<li>Installation</li>
<li>Installation</li>
<li>Installation</li>
<li>Installation</li>
<li>Installation</li>

</ul>
<br>
## Intallation instructions:
${installation}
<br>
## Usage:
${usage}
<br>
## License
${license}
<br>
## How others can contribute:
${contribute}
<br>
## Tests
${tests}
<br>
## Questions
<br>
This project was made by ${username}, please see their GitHub profile [here](https://github.com/${username})

Additionally, you can contact them via ${email} for any questions or comments. 
`;

        fs.writeFile("READMESample.md", mdInput, (err) =>
            err ? console.log(err) : console.log('Success!')
        );


    })




// .then((data) => {

// const {name, description} = data;
// const mdContent = `
// <title>${data.title}</title>
// <h1>${data.title}</h1>
// Project Details:
// <br>
// <p> Description: ${data.description}</p>

// `;

// questions()
// .then((answers) = writeFileAsync('ReadmeGen.md', generateReadme(answers)))
// .then(() => console.log('README generated!'))
// .catch((err) => console.error(err))



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