const fs = require("fs");
const inquirer = require("inquirer");
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

function generateNasaPhotoAppJs(response){
    return`import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";


export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
          
      </div>
    </BrowserRouter>
  );
}
`
}

function generateNasaPhotoHomeJs(response){
    return`import React from "react";
    import { Link } from "react-router-dom";
    
    export default function Home() {
     
      return (
        <div className="home">
          <Link className="home-link" to="/nasaphoto" ><h1>Pic of the Day</h1></Link>
          
        </div>
      );
    }
`
}

function generateNasaRoverAppJs(response){
    return`import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";
import ${response.roverChoice} from "./components/${response.roverChoice}";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={${response.roverChoice}} path="/${response.roverChoice}" />
          
      </div>
    </BrowserRouter>
  );
}
`
}

function generateNasaRoverHomeJs(response){
    return`import React from "react";
    import { Link } from "react-router-dom";
    
    export default function Home() {
     
      return (
        <div className="home">
          <Link className="home-link" to="/${response.roverChoice}" ><h1>${response.roverChoice} Rover</h1></Link>
          
        </div>
      );
    }
`
}



function generateNasaRoverJs(response){
    return`import React, { useState, useEffect } from "react";
    import NavBar from "./NavBar";
    
    const apiKey = process.env.REACT_APP_NASA_KEY;
    
    export default function ${response.roverChoice}() {
      const [photoData, setPhotoData] = useState({});
      
      useEffect(() => {
        fetchPhoto();
    
        async function fetchPhoto() {
          const res = await fetch(
            \`https://api.nasa.gov/mars-photos/api/v1/rovers/${response.roverChoice}/photos?sol=34&page=2&api_key=\${apiKey}\`
          );
          const data = await res.json();
          setPhotoData(data.photos[13]);
      }
        
      }, []);
    console.log(photoData)
    
      return (
      <>
        <NavBar></NavBar>
              <img
              src={photoData.img_src}
              className="photo"
            />
      </>
      );
    }
    `
}

function generateNasaNavBarJs(response){
    return`import React from 'react';
    import { Link } from 'react-router-dom';
    
    export default function NavBar() {
        return (
            <div className="navbar">
                <ul>
                    <Link className="link" to="/" exact >Take Me Home</Link>
                </ul>
            </div>
        )
    }
`
}

function generateIndexJs(response){
    return`import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
`
}

function generateIndexHtml(response){
    return`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using go-api"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the \`public\` folder during the build.
      Only files inside the \`public\` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      
    -->
    <title>${response.projectName}</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run \`npm start\` or \`yarn start\`.
      To create a production bundle, use \`npm run build\` or \`yarn build\`.
    -->
  </body>
</html>
    `
}

function generateDotEnv(response){
    if(response.apiProjectChoice == "nasa"){
        console.log('nasa')
    }else {
        console.log('news')
    }
return`
REACT_APP_NASA_KEY=${response.apiKey}
`}

function generateMovieJs(response){
    if(response.apiProjectChoice == "movie"){
        console.log('movie')
    }else {
        console.log('other')
    }
return`
This is the super cool movie page that was written.  Isn't it amazing
`};

promptUser().then(function(response){
    
    if(response.apiProjectChoice == "nasa" && response.nasaChoice == 'Picture of the day'){
    // fs.mkdirSync('./src/components').catch(console.error);
    let nasaPhotoJs = generateNasaPhotoJs(response);
    writeFileAsync("./src/components/NasaPhoto.js", nasaPhotoJs);
    let nasaApp = generateNasaPhotoAppJs(response);
    writeFileAsync("./src/App.js", nasaApp);
    let nasaHome = generateNasaPhotoHomeJs(response);
    writeFileAsync("./src/components/Home.js", nasaHome);
    let nasaNavBar = generateNasaNavBarJs(response);
    writeFileAsync("./src/components/NavBar.js", nasaNavBar);
    let nasaIndexJs = generateIndexJs(response);
    writeFileAsync("./src/index.js", nasaIndexJs);
    let nasaIndexHtml = generateIndexHtml(response);
    writeFileAsync("./public/index.html", nasaIndexHtml);
    let nasaEnv = generateDotEnv(response);
    writeFileAsync("./.env", nasaEnv);
    return response;
    // fs.writeFileSync("./src/components/NasaPhoto.js", nasaJs);
}else if(response.apiProjectChoice == "nasa" && response.nasaChoice == 'Rovers') {
    let nasaRoverJs = generateNasaRoverJs(response);
    writeFileAsync("./src/components/" + response.roverChoice + ".js" , nasaRoverJs);
    let nasaApp = generateNasaRoverAppJs(response);
    writeFileAsync("./src/App.js", nasaApp);
    let nasaHome = generateNasaRoverHomeJs(response);
    writeFileAsync("./src/components/Home.js", nasaHome);
    let nasaNavBar = generateNasaNavBarJs(response);
    writeFileAsync("./src/components/NavBar.js", nasaNavBar);
    let nasaIndexJs = generateIndexJs(response);
    writeFileAsync("./src/index.js", nasaIndexJs);
    let nasaIndexHtml = generateIndexHtml(response);
    writeFileAsync("./public/index.html", nasaIndexHtml);
    let nasaEnv = generateDotEnv(response);
    writeFileAsync("./.env", nasaEnv);
}else if(response.apiProjectChoice == "movie"){
    console.log('movie');
    let movieJs = generateMovieJs(response);
    writeFileAsync("./src/components/Movie.js", movieJs);
    return response;
    }else if(response.apiProjectChoice == "news"){
    console.log('news');
        }else if(response.apiProjectChoice == "marvel"){
        console.log('marvel');
            }else if(response.apiProjectChoice == "youtube"){
            console.log('youtube');
            }else {
                console.log('super cool')
            }
})
