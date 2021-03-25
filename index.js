const fs = require('fs');
const inquirer = require('inquirer');
const consola = require('consola');
const { config } = require('process');
// const CHOICES = fs.readdirSync(`${__dirname}/templates`);
const cwd = process.cwd();
//npm install [-g] shelljs
//might use shelljs to make the directories
consola.info("Getting started using the api-starter-kit-package");

const configVars = [];

inquirer
    .prompt([
    {
        name: 'apiProjectChoice',
        type: 'list',
        message: 'Please pick what API you would like to implement into your project. If your not ready to decide, dont worry just press CTRL + C to stop',
        choices: ['nasa', 'marvel', 'movie', 'youtube',  'news']
    },
    // {
    //     name: 'projectName',
    //     type: 'input',
    //     message: 'Name this Project:',
    //     validate: (input) => {
    //         if (/^([A-Za-z\-\_\d])+$/.test(input)) {
    //             return true;
    //         } else {
    //             return 'Project name must contain letters, numbers, underscores and hashes only.';
    //         }
    //     }
    // },
    // {
    //     name: 'injectApiKey',
    //     input: 'input =',
    //     message: 'Enter your api-key, if you have one already:',
    //     validate: (input) => {
    //         if (/^([A-Za-z\-\_\d])+$/.test(input)) {
    //             return true;
    //         } else {
    //             return 'Project name must contain letters, numbers, underscores and hashes only.';
    //         }
    //     }
    // }
    ])
    .then((apiChoice) => { 
        switch (apiChoice.apiProjectChoice) {
            case "nasa":  
                const prompt = inquirer.prompt([
                    {
                        name: 'nasaChoice',
                        type: 'list',
                        message: "Please pick which rover you would like to implement?",
                        choices: ['Spirit', 'Curiosity', 'Opportunity', 'Perseverance']
                    }
                ]);
                break;
            case 'Google_Maps':
                return 'google'
                
            case '':

                break;
            case 'blahblah':

                break;
            case 'blahblah':

                break;
            case 'blahblah':

                break;

        } 
        configVars.push(apiChoice)
        return prompt;
        
    })
    .then((answer) => {
        configVars.push(answer)
        console.log(configVars)
    })



    .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});

function createDirectoryContents (templatePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(templatePath);

    filesToCreate.forEach(file => {
        const origFilePath = `${templatePath}/${file}`;

      // get stats about the current file
        const stats = fs.statSync(origFilePath);


        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8');

            const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
            fs.writeFileSync(writePath, contents, 'utf8');
            let newFilePath
                if (file === '_gitignore') {
                    newFilePath = '.gitignore';
                    fs.renameSync(writePath, `${CURR_DIR}/${newProjectPath}/${newFilePath}`);
                } else if ( file === '_env'){
                    newFilePath = '.env';
                    fs.renameSync(writePath, `${CURR_DIR}/${newProjectPath}/${newFilePath}`);
                }

        } else if (stats.isDirectory()) {
        fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

        // recursive call
        createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
        }
    });

}