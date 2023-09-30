const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); // Import the generateMarkdown function

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How should users install your application?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should users use your application?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users run tests for your application?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate README content based on answers using generateMarkdown function
      const readmeContent = generateMarkdown(answers);

      // Write README file
      writeToFile('README.md', readmeContent);

      console.log('README.md created successfully!');
    })
    .catch((err) => console.error(err));
}

// Initialize the application
init();
