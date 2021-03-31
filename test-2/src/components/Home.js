import React from "react";
    import { Link } from "react-router-dom";
    export default function Home() {
      return (
        <div className="home">
          <Link className="home-link" to="/${response.roverChoice}" ><h1>{response.roverChoice} Rover</h1></Link>
        </div>
      );
    }
