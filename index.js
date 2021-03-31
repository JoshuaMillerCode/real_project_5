#!/usr/bin/env node
const { exec } = require("child_process");
const { default: consolaGlobalInstance } = require("consola");
const fs = require("fs");
const inquirer = require("inquirer");
const { stdout, stderr } = require("process");
const generate = require('./generateFunctions');
const CURR_DIR = process.cwd()


function promptUser(){
    return inquirer.prompt([
        {
            name: 'apiProjectChoice',
            type: 'list',
            message: 'Please pick what API you would like to implement into your project. If your not ready to decide, dont worry just press CTRL + C to stop',
            choices: ['nasa', 'marvel', 'movie', 'youtube',  'news']
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
        {
            name: 'nasaChoice',
            type: 'list',
            message: "Which NASA api would you like to use?",
            choices: ['Picture of the day', 'Rovers'],
            when: (response) => response.apiProjectChoice === 'nasa'
        },
        {
            name: 'roverChoice',
            type: 'list',
            message: "Please pick which rover you would like to implement?",
            choices: ['Spirit', 'Curiosity', 'Opportunity', 'Perseverance'],
            when: (response) => response.nasaChoice === 'Rovers'
        }
    ])
}

function generateDotEnv(response){
    // if(response.apiProjectChoice == "nasa"){
    //     console.log('nasa')
    // }else {
    //     console.log('news')
    // }
return`
API_KEY=${response.apiKey}
`}


promptUser().then(function(response){
    const projectChoice = response.apiProjectChoice;
    const projectName =  response.projectName;
    const templatePath = `${__dirname}/templates/starter-kit`;

    fs.mkdirSync(`${CURR_DIR}/${projectName}`);
    
    consola.info(`Nice Choice!! Your project is now being bulit!`);
    consola.info(`Implenting ${projectChoice} API...`);
    consola.info(`Just imagine the possibilities with this AMAZING pre-written code!`);
    consola.info(`But seriously, thank you for choosing this package for this great project.`);
    consola.info(`We are truly grateful.`)
    exec(`cd ${projectName} && npm i`, (err, stdout, stderr) => {
        if (err){
            consola.error(`Hmmmm... We've come across an error, but don't worry: ${err}`);
            consola.warn(`These warning could help you with this error: ${stderr}`);
            return;
        } else {
            consola.warn(stdout);
            exec(`cd ${projectName} && npm audit`, (err, stdout, stderr) => {
                consola.warn(`These are some warnings but they\'re no big deal, trust me: ${stdout}`)
                consola.success(`Your project has been successfully built!!!`)
                consola.success(`Your project is inside of your ${CURR_DIR} directory, run this command to enter your project: /n
                > cd ${projectName} <`);
                consola.success('The api related files are in the > components < folder');
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

  function dynamicFiles (response, projectName) {
    if(response.apiProjectChoice == "nasa" && response.nasaChoice == 'Picture of the day'){
        let nasaPhotoJs = generate.NasaPhotoJs(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/src/components/NasaPhoto.js`, nasaPhotoJs);

        let nasaApp = generate.NasaPhotoAppJs(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/src/App.js`, nasaApp);

        let nasaHome = generate.NasaPhotoHomeJs(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/src/components/Home.js`, nasaHome);

        let nasaNavBar = generate.NasaNavBarJs(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/src/components/NavBar.js`, nasaNavBar);

        let nasaEnv = generate.DotEnv(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/.env`, nasaEnv);


    }else if(response.apiProjectChoice == "nasa" && response.nasaChoice == 'Rovers') {
        let nasaRoverJs = generate.NasaRoverJs(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/src/components/${response.roverChoice}.js` , nasaRoverJs);

        let nasaApp = generate.NasaRoverAppJs(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/src/App.js`, nasaApp);

        let nasaHome = generate.NasaRoverHomeJs(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/src/components/Home.js`, nasaHome);

        let nasaNavBar = generate.NasaNavBarJs(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/src/components/NavBar.js`, nasaNavBar);

        let nasaEnv = generate.DotEnv(response);
        fs.writeFileSync(`${CURR_DIR}/${projectName}/.env`, nasaEnv);

    }else if(response.apiProjectChoice == "movie"){
        console.log('movie');
        let movieJs = generateMovieJs(response);
        fs.writeFileSync("./src/components/Movie.js", movieJs);
    }else if(response.apiProjectChoice == "news"){
        console.log('news');
    }else if(response.apiProjectChoice == "marvel"){
        console.log('marvel');
    }else if(response.apiProjectChoice == "youtube"){
        console.log('youtube');
    }else {
        console.log('super cool')
    }
  }
