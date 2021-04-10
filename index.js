#!/usr/bin/env node
const { exec } = require("child_process");
const { default: consolaGlobalInstance } = require("consola");
const fs = require("fs");
const inquirer = require("inquirer");
const generate = require('./generateFunctions');
const CURR_DIR = process.cwd()




function promptUser(){
    return inquirer.prompt([
        {
            name: 'apiProjectChoice',
            type: 'list',
            message: 'Please pick what API you would like to implement into your project. If your not ready to decide, dont worry just press CTRL + C to stop',
            choices: ['Nasa', 'Movie', 'Youtube',  'News', 'Edamam', 'RAWG Video Games', 'LastFm Music']
        },
        {
            name: 'apiChoice',
            type: 'confirm',
            message: 'Do you have an Api Key yet?',
        },
        {
            name: 'apiKey',
            input: 'input',
            message: 'Enter your api-key, if you have one already:',
            validate: (input) => {
                if (/^([A-Za-z\-\_\d])+$/.test(input)) {
                    return true;
                } else {
                    return 'Project name must contain letters, numbers, underscores and hashes only.';
                }
            },
            when: (response) => response.apiChoice === true
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
        },
    ])
}




promptUser().then(function(response){
    const projectChoice = response.apiProjectChoice;
    const projectName =  response.projectName;
    const templatePath = `${__dirname}/templates/starter-kit`;

    fs.mkdirSync(`${CURR_DIR}/${projectName}`);
    
    consola.info(`Nice Choice!! Your project is now being bulit!`);
    consola.info(`Implenting ${projectChoice} API...`);
    consola.info(`Just imagine the possibilities with this AMAZING pre-written code!`);
    consola.info(`But seriously, thank you for choosing this package for this great project.`);
    consola.info(`We are truly grateful.`);
    consola.info('Be patient, this might take a few minutes...')
    exec(`cd ${projectName} && npm i`, (err, stdout, stderr) => {
        if (err){
            consola.error(`Hmmmm... We've come across an error, but don't worry: ${err}`);
            consola.warn(`These warning could help you with this error: ${stderr}`);
            return;
        } else {
            consola.warn(stdout);
            exec(`cd ${projectName} && npm audit`, (err, stdout, stderr) => {
                consola.warn(`These are some warnings but they\'re no big deal, trust me: ${stdout}`);
                consola.success(`Your project has been successfully built!!!`);
                consola.success(`Your project is inside of your ${CURR_DIR} directory, run this command to enter your project: /n
                > cd ${projectName} <`);
                consola.success('After that, all you have to do is run > npm start < to get it going.');
                consola.success(`In the generated project we have made a cheatsheet for the ${projectChoice} api for you to look at and reference.`);
                consola.success('The api related files are in the > components < folder');
                consola.success('If you did not provide an API-KEY, don\'t worry. There will be a config.js file within you project directory where you can add the key once you receive one');
                consola.success(`We hope this helps you kickstart your project! Have fun!`);
            })
        }
        return;
    })

    createDirectoryContents(templatePath, projectName);
    dynamicFiles(response, projectName);
})


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


   function writeDynamicFiles (generateFunc, response, projectName) {
        let content = generateFunc
        fs.writeFileSync(`${CURR_DIR}/${projectName}/src/components/examples.js`, content);

        let apiGo = generate.ApiGoPage(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/src/components/APIGo.js`, apiGo);

        let config = generate.ConfigJS(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/src/config.js`, config)
   }

  function dynamicFiles (response, projectName) {
    switch (response.apiProjectChoice) {
        case 'Nasa':
            writeDynamicFiles(generate.NasaExample(response), response, projectName);
            break;
        case 'Movie':
            writeDynamicFiles(generate.MovieExample(response), response, projectName);
            break;
        case 'Youtube':
            writeDynamicFiles(generate.YoutubeExample(response), response, projectName);
            break;
        case 'News':
            writeDynamicFiles(generate.NewsExample(response), response, projectName);
            break;
        case 'Edamam':
            writeDynamicFiles(generate.EdamamExample(response), response, projectName);
            break;
        case 'RAWG Video Games':
            writeDynamicFiles(generate.RawgExample(response), response, projectName);
            break;
        case 'LastFm Music':
            writeDynamicFiles(generate.LastFmExample(response), response, projectName);
            break;
    }
  }

  
