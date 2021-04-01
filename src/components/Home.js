import React from "react";
    import { Link } from "react-router-dom";
    

    let testVar =
    {
      sol: 0,
      earth_date: "2012-08-06",
      total_photos: 3702,
      cameras: [
        "CHEMCAM",
        "FHAZ",
        "MARDI",
        "RHAZ"
      ]
    }
    export default function Home() {
     
      return (
        <>
        <div className="home">
          <Link className="home-link" to="/Perseverance" ><h1>Perseverance Rover</h1></Link>
        </div>
        <div>
        <h1>Mission Manifest Endpoint</h1> 
<h4>A mission manifest is available for each Rover at the /manifests/Perseverance . This manifest will list details of the Rover's mission to help narrow down photo queries to the API. The information in the manifest includes:

name
landing_date
launch_date
status
max_sol
max_date
total_photos
It also includes a list of objects under the photos key which are grouped by sol, and each of which contains:

sol
total_photos
cameras
An example entry from /manifests/Curiosity might look like:

</h4>
<pre>
{JSON.stringify(testVar, null, 2)}
</pre>
        </div>
        <div>
          <h1>Photo Attributes</h1>
          <h4>
        Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that too.
        </h4>
        <h4>
        Along with querying by date, results can also be filtered by the camera with which it was taken. Each camera has a unique function and perspective, and they are named as follows:
        </h4>
        </div>
        </>
      );
    }
