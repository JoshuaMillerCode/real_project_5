const fs = require('fs');
const inquirer = require('inquirer');
const consola = require('consola')
const CHOICES = fs.readdirSync(`${__dirname}/templates`);
const cwd = process.cwd();
//npm install [-g] shelljs
//might use shelljs to make the directories
consola.info("Getting started using the api-starter-kit-package");



inquirer
    .prompt([
    {
        name: 'apiProjectChoice',
        type: 'list',
        message: 'Please pick what API you would like to implement into your project. If your not ready to decide, dont worry just press CTRL + C to stop',
        choices: CHOICES
    },
    {
        name: 'projectName',
        type: 'input',
        message: 'Name this Project:',
        validate: (input) => {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) {
                return true;
            } else {
                return 'Project name must contain letters, numbers, underscores and hashes only.';
            }
        }
    }
    ])
    .then(({apiProjectChoice, projectName}) => {
        consola.info(`${apiProjectChoice} was chosen. Generating ${projectName} in ${cwd}/${projectName}, beep boop beep.`)
    })
    .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});