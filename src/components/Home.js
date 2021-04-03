import React from "react";
    import { Link } from "react-router-dom";
    import "../App.css";
  export default function Home() {
     
      return (
        <>
{/* ********** The section below is dynamically created replacing title image with their api choice logo******** */}
        <div className='topSection'>
          <div  className='titleImage'>
            <img src='/img/nasa.jpg'></img>
          </div>
          <div className='apiGoLogoDiv'> 
          <img src='/img/api-go.png'></img>
          </div>
        </div>
        <br />
{/* **************************************************************************************************************** */}


        <div className="home">
          <Link className="home-link" to="/Examples" ><h2>Nasa Examples</h2></Link>
          <Link className="home-link" to="/Examples2" ><h2>News Examples</h2></Link>
        </div>
      


        <div className='welcomeContainerDiv'>
          <div className='welcomeDiv'>
         
        <h1>Welcome to API-Go</h1>
        </div>
        <div className='welcomeTextDiv'>
          <h4>BLAH BLAH BLAH</h4>
        </div>
        </div>
        </>
      );
    }
