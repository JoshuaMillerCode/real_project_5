
import React, { useState, useEffect } from "react";

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);
    useEffect(() => {
      fetchPhoto();
      async function fetchPhoto() {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
          );
        const data = await res.json();
        setPhotoData(data);
      }
    }, []);
    if (!photoData) return <div />;
    return (
        <div>
          <img src={photoData.url}/>
          <h2>{photoData.title}</h2>
          <h2>{photoData.date}</h2>
          <p>{photoData.explanation}</p>
        </div>
    );
  }