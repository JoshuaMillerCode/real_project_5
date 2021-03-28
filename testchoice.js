const fs = require("fs");
const inquirer = require("inquirer");
// const Choices = require("inquirer/lib/objects/choices");
// const { report } = require("process");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile)
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

console.log(response);
function generateNasaPhotoJs(response){
    if(response.apiProjectChoice == "nasa"){
        console.log('nasa')
    }else if (response.apiProjectChoice == "news"){
        console.log('news')
    }
return`import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
require('dotenv').config();
const apiKey = process.env.REACT_APP_NASA_KEY;
export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);
    useEffect(() => {
      fetchPhoto();
      async function fetchPhoto() {
        const res = await fetch(
          \`https://api.nasa.gov/planetary/apod?api_key=\${apiKey}\`
          );
        const data = await res.json();
        setPhotoData(data);
      }
    }, []);
    console.log(photoData);
    if (!photoData) return <div />;
    return (
      <>
      <NavBar />
      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img
            src={photoData.url}
            alt={photoData.title}
            className="photo"
          />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>
        </div>
      </div>
      </>
    );
  }
 `
}


    
        

promptUser().then(function(response){
    if
    let nasaJs = generateNasaPhotoJs(response);
    writeFileAsync("./src/components/NasaPhoto.js", nasaJs);
    return response;
    // fs.writeFileSync("./src/components/NasaPhoto.js", nasaJs);
})
.then(function(response){
    const nasaEnv = generateDotEnv(response);
    writeFileAsync("./.env", nasaEnv);
    return response;
})
.then(function () {
        console.log("Generating Super Cool Totally Awesome File...");
    }).catch(function(err){
    console.error(err)
})
}}
function generateDotEnv(response){
    if(response.apiProjectChoice == "nasa"){
        console.log('nasa')
    }else {
        console.log('news')
    }
return`REACT_APP_NASA_KEY=${response.apiKey}
replace undefined with your NASA API KEY.  You can get one for free from here https://api.nasa.gov/
`}
whichApiWasChosen();
