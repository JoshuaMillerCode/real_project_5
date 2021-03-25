import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Perseverance() {
  const [photoData, setPhotoData] = useState([]);
  
  // useEffect(() => {
  //   fetchPhoto();

  //   async function fetchPhoto() {
  //     const res = await fetch(
  //       `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=32&page=2&api_key=PznWNg9VRWns0PUiMSIRpRaaZ3b3TX9MKUVjawiR`
  //     );
  //     const data = await res.json();
  //     setPhotoData(data);
  //     console.log(data);
  //     console.log(data.photos[1].img_src);
      
  //     // console.log(photoData.photos);
  //   }
    
  // }, []);

  useEffect(async () => {
    try {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=32&page=2&api_key=PznWNg9VRWns0PUiMSIRpRaaZ3b3TX9MKUVjawiR`);
        const data = await response.json();
        setPhotoData(data);
        // console.log(data);
        // console.log(data.photos);
        console.log(data.photos[1].img_src);

    } catch (e) {
        console.error(e);
    }
}, []);
  console.log(photoData.photos);

  // if (!photoData) return <div />;
  
  return (
    
    <>
          {/* <img
          src={photoData.photos[1].img_src}
          className="photo"
        /> */}
    
    </>
  );
}
