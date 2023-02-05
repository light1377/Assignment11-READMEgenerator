const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

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
    .then((data) => {
        console.log(data);

        const { title, contents, username, email, description, installation, contribute, tests, license, usage } = data;

        function licenseBadge(license) {
            const badges = {
                MIT: "[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                APACHE: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                GPL: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
                BSD: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
                none: ""
            }
            return badges[license]

        }

        const mdInput = `
# ${title}
${licenseBadge(data.license)}

## Description:
${ description }
## Contents:

- [Installation](#installation-instructions)
- [Usage](#usage)
- [License](#license)
- [Contributing](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation Instructions
${installation}

## Usage
${usage}

## License
${license}

## How to contribute
${contribute}

## Tests
${tests}

## Questions

This project was made by GitHub user ${username}, please see their GitHub profile [here](https://github.com/${username})

Additionally, you can contact them via ${email} for any questions or comments. 
`;
        fs.writeFile("READMESample.md", mdInput, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });