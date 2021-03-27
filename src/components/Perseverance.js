import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Perseverance() {
  const [photoData, setPhotoData] = useState({});
  
  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=34&page=2&api_key=PznWNg9VRWns0PUiMSIRpRaaZ3b3TX9MKUVjawiR`
      );
      const data = await res.json();
      setPhotoData(data.photos[13]);
     
      
      // console.log(photoData.photos);
    }
    
  }, []);
console.log(photoData)
//   useEffect(async () => {
//     try {
//         const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=32&page=2&api_key=PznWNg9VRWns0PUiMSIRpRaaZ3b3TX9MKUVjawiR`);
//         const data = await response.json();
//         setPhotoData(data.photos);
//         // console.log(data);
//         // console.log(data.photos);
//         console.log(data.photos[1].id);

//     } catch (e) {
//         console.error(e);
//     }
// }, []);
  

  // if (!photoData) return <div />;
  
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
