import React, { useState, useEffect } from "react";
    import NavBar from "./NavBar";
    
    const apiKey = process.env.REACT_APP_NASA_KEY;
    
    export default function Spirit() {
      const [photoData, setPhotoData] = useState({});
      
      useEffect(() => {
        fetchPhoto();
    
        async function fetchPhoto() {
          const res = await fetch(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/Spirit/photos?sol=34&page=2&api_key=${apiKey}`
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
    