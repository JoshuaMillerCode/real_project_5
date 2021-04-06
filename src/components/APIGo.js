import React from "react";
    import { Link } from "react-router-dom";
    import "../App.css";
import NavBar from "./NavBar";
  export default function AGIGo() {
     
      return (
        <>
        <NavBar />

        <div className='topSectionHome'>
          <div className='apiGoLogoHomeDiv'> 
            <img src='/img/api-go.png'></img>
          </div>
        </div>
        <br />

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
