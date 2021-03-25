import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
 
  return (
    <div className="home">
      <Link className="home-link" to="/nasaphoto" ><h1>Pic of the Day</h1></Link>
      <Link className="home-link" to="/perseverance" ><h1>Perseverance Rover</h1></Link>
    </div>
  );
}