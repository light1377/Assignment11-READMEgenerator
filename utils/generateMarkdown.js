// function to generate markdown for README




function generateMarkdown(data) {

const { title, username, email, description, installation, contribute, tests, license, contents } = data;
  return `## ${data.title}
${description}

##Username
${username}

##Email
${email}

##Description
${description}


##Installation
${installation}

// ##Contrubution
// ${contribute}


// ##Tests
// ${tests}


// ##License
// ${License}

##Contents
${contents}


`;
}

module.exports = generateMarkdown;
