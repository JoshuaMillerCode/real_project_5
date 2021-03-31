function NasaPhotoJs(response){
    
return`
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
require('dotenv').config();
const apiKey = process.env.API_KEY;
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

function NasaPhotoAppJs(response){
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

function NasaPhotoHomeJs(response){
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

function NasaRoverAppJs(response){
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

function NasaRoverHomeJs(response){
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

function NasaRoverJs(response){
    return`import React, { useState, useEffect } from "react";
    import NavBar from "./NavBar";
    const apiKey = process.env.REACT_APP_NASA_KEY;
    export default function ${response.roverChoice}() {
      const [photoData, setPhotoData] = useState({});
      useEffect(() => {
        fetchPhoto();
        async function fetchPhoto() {
          const res = await fetch(
            \`https://api.nasa.gov/mars-photos/api/v1/rovers/${response.roverChoice}/photos?sol=34&page=2&api_key=${apiKey}\`
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

function NasaNavBarJs(response){
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

function DotEnv(response){
return`
API_KEY=${response.apiKey}
`}


const functions = {
    NasaPhotoJs,
    NasaPhotoAppJs,
    NasaPhotoHomeJs,
    NasaRoverAppJs,
    NasaRoverHomeJs,
    NasaRoverJs,
    NasaNavBarJs,


    DotEnv

}

module.exports = functions;