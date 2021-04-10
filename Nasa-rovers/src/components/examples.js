import React  from "react";
        
        const manifestJson =
            {
              "sol": 1,
              "earth_date": "2021-02-19",
              "total_photos": 201,
              "cameras": [
              "EDL_DDCAM",
              "EDL_PUCAM2",
              "EDL_RDCAM",
              "EDL_RUCAM",
              "FRONT_HAZCAM_LEFT_A",
              "FRONT_HAZCAM_RIGHT_A",
              "MCZ_LEFT",
              "MCZ_RIGHT",
              "NAVCAM_LEFT",
              "NAVCAM_RIGHT",
              "REAR_HAZCAM_LEFT",
              "REAR_HAZCAM_RIGHT",
              "SKYCAM"
              ]
              }
        export default function Examples() {
        
          return (
          <>
               
          <div className='topSection'>
          <div  className='titleImage'>
            <img src='https://api-go.app/img/nasa.jpg'></img>
          </div>
          <div className='apiGoLogoDiv'> 
          <img src='https://api-go.app/img/api-go.png'></img>
          </div>
        </div>
        <br />
                <h2>Your API-KEY is: ewoewrhbre989343nk4</h2>
                <h2>If you dont' have one yet, get your <a target='_blank' href='https://api.nasa.gov/'>NASA-API key</a></h2>
                <h1>Nasa's Mars Rover Api</h1>
                <div className='exampleIntro'>
                <p>Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that too.
        
        Along with querying by date, results can also be filtered by the camera with which it was taken and responses will be limited to 25 photos per call. Queries that should return more than 25 photos will be split onto several pages, which can be accessed by adding a 'page' param to the query.</p>
        </div>
        <br />
                <h1>Mission Manifest</h1>
        <div className='missionManifestDiv'>
          
          
        <h4>A mission manifest is available for each Rover at the /manifests/ROVER-NAME </h4>
          <p>
          This manifest will list details of the Rover's mission to help you narrow down photo queries to the API.
        <br />
          The information in the manifest includes:
          </p>
        <div className='nasaLists'>
        <ul>
        <li>name</li>
        <li>landing_date</li>
        <li>launch_date</li>
        <li>status</li>
        <li>max_sol</li>
        <li>max_date</li>
        <li>total_photos</li>
        </ul>
        </div>
        It also includes a list of objects under the photos key which are grouped by sol, and each of which contains:
        <div className='nasaLists'>
        <ul>
        <li>sol</li>
        <li>total_photos</li>
        <li>cameras</li>
        </ul>
        </div>
        Here's and example manifest endpoint that looks at what Perseverance has done so far 
        <br />
        <br />
        <i><h4>https://api.nasa.gov/mars-photos/api/v1/manifests/perseverance?&api_key=DEMO-KEY</h4></i>
        <br />
        <br />
        It will return entries from every single day the rover has been active.  An example day entry 
        
        
        <pre className='showJson'>
        {JSON.stringify(manifestJson, null, 2)}
        </pre>
        </div>
        <br />
        <br />
        <br />
        <h1>Photo Attributes</h1>
                <div className ='PhotoAttributesDiv'>
                  
                  <p className='nasaParagraphDiv'>
                Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that too.
                </p>
                <p className='nasaParagraphDiv'>
                Along with querying by date, results can also be filtered by the camera with which it was taken. Each camera has a unique function and perspective, and they are named as follows:
                </p>
                
                </div>
                <br />
                <br />
                <br />
        <h1>Perseverance rover cameras:</h1>
        <div className='rover-info'>
        <div className='rover-cameras'>
          <img className='roverPic' src='https://api-go.app/img/perseverance-cameras.jpg'></img>
        </div>
        <div className='camera-table'>
        <table className='cameraTable'>
        <tr className='tableTitles'>
        
        <td><b>Abbreviation</b> </td> <td><b>Camera</b></td></tr>
        <tr><td>EDL_RUCAM	 </td> <td> Rover Up-Look Camera</td></tr>
        <tr><td>EDL_RDCAM	</td> <td> Rover Down-Look Camera</td></tr>
        <tr><td>EDL_DDCAM	</td> <td> Descent Stage Down-Look Camera</td></tr>
        <tr><td>EDL_PUCAM1	</td> <td> Parachute Up-Look Camera A</td></tr>
        <tr><td>EDL_PUCAM2</td> <td> 	Parachute Up-Look Camera B</td></tr>
        <tr><td>NAVCAM_LEFT</td> <td> 	Navigation Camera - Left</td></tr>
        <tr><td>NAVCAM_RIGHT	</td> <td> Navigation Camera - Right</td></tr>
        <tr><td>MCZ_RIGHT</td> <td> 	Mast Camera Zoom - Right</td></tr>
        <tr><td>MCZ_LEFT </td> <td> 	Mast Camera Zoom - Left</td></tr>
        <tr><td>FRONT_HAZCAM_LEFT_A	</td> <td> Front Hazard Avoidance Camera - Left</td></tr>
        <tr><td>FRONT_HAZCAM_RIGHT_A	</td> <td> Front Hazard Avoidance Camera - Right</td></tr>
        <tr><td>REAR_HAZCAM_LEFT</td> <td> 	Rear Hazard Avoidance Camera - Left</td></tr>
        <tr><td>REAR_HAZCAM_RIGHT	</td> <td> Rear Hazard Avoidance Camera - Right</td></tr>
        <tr><td>SKYCAM </td> <td> 	MEDA Skycam</td></tr>
        <tr><td>SHERLOC_WATSON </td> <td> 	SHERLOC WATSON Camera</td></tr>
        </table>
        </div>
        </div>
        <br />
        
        <h1> Curiosity, Opportunity, and Spirit cameras:</h1>
        <table className='cameraTable'>
        <tr className='tableTitles'><td><b>Abbreviation</b></td><td>	<b>Camera</b></td><td>	<b>Curiosity</b></td>	<td><b>Opportunity</b></td>	<td><b>Spirit</b></td></tr>
        <tr><td>FHAZ</td><td>Front Hazard Avoidance Camera</td>	<td>✔</td><td>✔</td><td>✔</td></tr>
        <tr><td>RHAZ</td>		<td>	Rear Hazard Avoidance Camera</td><td>✔</td><td>✔</td><td>✔</td></tr>
        <tr><td>MAST</td>			<td>Mast Camera</td>	<td>✔</td><td></td><td></td></tr>
        <tr><td>CHEMCAM</td>		<td>	Chemistry and Camera Complex</td><td>✔</td><td></td><td>	</td></tr>
        <tr><td>MAHLI</td>		<td>Mars Hand Lens Imager</td>		<td>✔	</td><td> </td><td>	</td></tr>
        <tr><td>MARDI</td>		<td>	Mars Descent Imager</td>	<td>✔</td><td>	</td><td>	</td></tr>
        <tr><td>NAVCAM</td>			<td>Navigation Camera</td><td>✔	</td><td>✔</td><td>	✔</td></tr>
        <tr><td>PANCAM</td>		<td>Panoramic Camera</td>	<td>✔</td><td>✔</td><td></td></tr>
        <tr><td>MINITES</td>			<td>Miniature Thermal Emission Spectrometer (Mini-TES)</td><td>✔</td><td>✔</td><td></td></tr>
        </table>
        <br />
        <br />
        <br />
        <h1>Querying the API</h1>
        <div className='queryExamplesDiv'>
        
        
        
        <h3>The API can be queried in the following format:</h3>
        <h2>Queries by Martian sol:</h2>
        
        <p>Queries by sol can range from 0, which is the date of landing, up to the current maximum in the database. The current max sol for each rover can be found at that rover's endpoint.
        </p>
        
        <i><h4>https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?api_key=DEMO_KEY&sol=1</h4></i>
        <br />
        <br />
        <hr className='exampleHr' />
        <h2>Querying by Earth date:</h2>
        
        <p>Dates should be formatted as 'yyyy-mm-dd'. The earliest date available is the date of landing for each rover.</p>
        
        <i><h4>https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?api_key=DEMO_KEY&earth_date=2021-3-28</h4></i>
        <br />
        <br />
        <hr className='exampleHr' />
        <h2>Filtering Queries by Camera:</h2>
        <p>The camera parameter is not case sensitive, but must be one of the camera abbreviations listed in the table above for the respective rover.</p>
        
        <i><h4>https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?api_key=DEMO_KEY&sol=22&camera=MCZ_RIGHT</h4></i>
        <br />
        
        <i><h4>https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?api_key=DEMO_KEY&earth_date=2021-3-05&camera=MCZ_RIGHT</h4></i>
        <br />
        <br />
        <hr className='exampleHr' />
        <h2>Query For Latest Photos</h2>
        <p> you just want to receive photo data for the most recent Sol for which photos exist for a particular rover, you can visit the /latest_photos endpoint.</p>
        
        <i><h4>https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=DEMO_KEY</h4></i>
        <br />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
          </>
          );
        }