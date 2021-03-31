import React from "react";
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
