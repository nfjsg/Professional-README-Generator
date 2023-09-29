const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  // Add more questions for description, installation, etc.
];
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate README content based on answers
      const readmeContent = generateREADME(answers);

      // Write README file
      writeToFile('README.md', readmeContent);

      console.log('README.md created successfully!');
    })
    .catch((err) => console.error(err));
}
