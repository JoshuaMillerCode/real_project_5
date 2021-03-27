const fs = require("fs");
const inquirer = require("inquirer");
const generate = require('./generateFunctions');
const CURR_DIR = process.cwd()
// const Choices = require("inquirer/lib/objects/choices");
// const { report } = require("process");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFileSync)
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

    createDirectoryContents(templatePath, projectName, response);
})

function createDirectoryContents (templatePath, newProjectPath, response) {
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

    if(response.apiProjectChoice == "nasa"){
        let nasaJs = generate.nasaPhotoJs(response);
        writeFileAsync(`${CURR_DIR}/src/components/NasaPhoto.js`, nasaJs);
        let nasaEnv = generateDotEnv(response);
        writeFileAsync(`${CURR_DIR}/.env`, nasaEnv);
    }else if(response.apiProjectChoice == "movie"){
        console.log('movie');
        let movieJs = generateMovieJs(response);
        writeFileAsync("./src/components/Movie.js", movieJs);
    }else if(response.apiProjectChoice == "news"){
        console.log('news');
    }else if(response.apiProjectChoice == "marvel"){
        console.log('marvel');
    }else if(response.apiProjectChoice == "youtube"){
        console.log('youtube');
    }
  }