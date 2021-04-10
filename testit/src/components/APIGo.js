
        import React from "react";
        import { useState, useEffect } from "react";
    import { Link } from "react-router-dom";
    import "../App.css";
    import secrets from '../config.js';
  export default function APIGo() {
        
        //Example Fetch
        const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try{
                const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=${secrets.apiKey}&format=json`);
                const data = await res.json()
                await setData(data.results.albummatches.album)
            } catch (err) {
                console.error(err)
            }
        })()
    }, [])
        
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
            <br /><br />
            <h1>Example Display Data:</h1>
        <div className='exampleFetchContainerDiv'>
                
                
                    { 
                        data.map((data) => {
                            return (
                                <><div className='exampleFetchDiv'>
                                    <h2> Album Title: {data.name}</h2>
                                    <h3>Album Artist: {data.artist}</h3>
                                    <img src={data.image[3]['#text']}/>
                                    </div>
                                </>
                            )
                        }) 
                    }
               
            </div>
        
        
        </>
      );
    }
        