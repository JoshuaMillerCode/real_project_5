
        import React from "react";
        import { useState, useEffect } from "react";
    import { Link } from "react-router-dom";
    import "../App.css";
    import secrets from '../config.js';
  export default function APIGo() {
        
      //Example Fetch
      const [data, setData] = useState({});
      useEffect(() => {
        (async () => {
          const res = await fetch(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/Spirit/photos?sol=34&page=2&api_key=${secrets.apiKey}`
          );
          const data = await res.json();
          setData(data);
      })()
      }, []);
    
      return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='welcomeContainerDiv'>
            <div className='apiGoLogoDivMain'> 
            <img src='https://api-go.app/img/api-go.gif'></img>
            </div>
            </div>
            <br />

        
            <div className='welcomeDiv'>
                <h1>Welcome to API-Go</h1>
            </div>
        
        </>
      );
    }
        