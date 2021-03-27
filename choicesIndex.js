const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const { report } = require("process");
// const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile)

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
            when: (answers) => answers.apiChoice === true
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
            when: (answers) => answers.apiProjectChoice === 'nasa'
        },
        {
            name: 'roverChoice',
            type: 'list',
            message: "Please pick which rover you would like to implement?",
            choices: ['Spirit', 'Curiosity', 'Opportunity', 'Perseverance'],
            when: (answers) => answers.nasaChoice === 'Rovers'
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"]
        },
        {
            type: "input",
            name: "author",
            message: "What is the author's name?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }
        
    ])
}



function generateNasaPhotoJs(response){
    let badge = "";
    if(response.license == "MIT"){
        badge = "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)"
    }else if (response.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    }else if (response.license == "GPL 3.0"){
        badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    }else if (response.license == "BSD 3"){
        badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
    }
    
return`
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";



export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        \`https://api.nasa.gov/planetary/apod?api_key=${apiKey}\`
      );
      const data = await res.json();
      setPhotoData(data);
      // console.log(data);
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
          src={photoData.hdurl}
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
    // const nasaPhotoJs = generateNasaPhotoJs(response);
    return writeFileAsync("src/components/NasaPhoto.js", response);
}).then(function () {
        console.log("Generating Super Cool and Amazing File...");
    }).catch(function(err){
    console.log(err)
})

