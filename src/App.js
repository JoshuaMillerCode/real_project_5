import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";
import "./NewsApp.css";
import Examples from "./components/examples";
import Examples2 from "./components/examples2";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={Examples} path="/Examples" />
          <Route component={Examples2} path="/Examples2" />
          
      </div>
    </BrowserRouter>
  );
}
