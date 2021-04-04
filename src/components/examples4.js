import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Examples4() {

      return (
      <>
                  <div className='topSection'>
                <div  className='titleImage'>
                  <img src='/img/youtube.jpg'></img>
                </div>
                <div className='apiGoLogoDiv'> 
                <img src='/img/api-go.png'></img>
                </div>
            </div>
              <br />
        <NavBar></NavBar>
        <h2> If you dont't have it yet get your Free <a target='_blank' href='https://developers.google.com/youtube/registering_an_application'>YouTube API</a> key</h2>
        <br />
    <h1>YouTube API</h1> 
    <p>Add YouTube features to your application, including the ability to upload videos, create and manage playlists, and more.</p>
    <br />
      <br />
      
      
      <h4>***********************  Dont forget to remove key below! **********************</h4>
      <h3>My key for testing:   </h3>
      <br />
      <br />
    <div className='exampleContainerDiv'>
    <h2>Search: list</h2>
    <p>Returns a collection of search results that match the query parameters specified in the API request. 
      <br />By default, a search result set identifies matching video, channel, and playlist resources,
      <br /> but you can also configure queries to only retrieve a specific type of resource.</p>
    <div className='exampleTopDiv'>
    
    
    
    
    
    
    <h2>Query Parameters:</h2>
    
    <hr className='exampleHr' />
    <br />
    <table className='exampleTable1'>
    <tr> 
        <td>
        <b>PARAMETERS</b>
        </td>
        <td>
        <b>DESCRIPTION</b>
        </td>
    </tr>
    <tr width='100%'>
      <td colspan='2'>
      <b>required parameters</b>
      </td>
    </tr>
    <tr>
        <td >
        <b>
        part
        </b>
        </td>
        <td>
        <b>string</b><br />
The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
        </td>
    </tr>
    <tr width='100%'>
      <td colspan='2'>
      <b>Filters (specify 0 or 1 of the following parameters)</b>
      </td>
    </tr>
    <tr>
        <td >
        <b>
        forContentOwner
        </b>
        </td>
        <td>
        <b>boolean</b><br />
        This parameter can only be used in a properly authorized request, and it is intended exclusively for YouTube content partners.<br />
        <br />

          The forContentOwner parameter restricts the search to only retrieve videos owned by the content owner identified by the onBehalfOfContentOwner parameter. If forContentOwner is set to true, the request must also meet these requirements:
          <br /><br />
          <ul>
          <li>The onBehalfOfContentOwner parameter is required.</li>
          <li>The user authorizing the request must be using an account linked to the specified content owner.</li>
          <li>The type parameter value must be set to video.</li>
          <li>None of the following other parameters can be set: videoDefinition, videoDimension, videoDuration, videoLicense, videoEmbeddable, videoSyndicated, videoType.</li>
          </ul>
        </td>
    </tr>
    <tr>
        <td >
        <b>
        forDeveloper
        </b>
        </td>
        <td>
        <b>boolean</b><br />
        This parameter can only be used in a properly authorized request. The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. The forDeveloper parameter can be used in conjunction with optional search parameters like the q parameter.
        <br />
        <br />
For this feature, each uploaded video is automatically tagged with the project number that is associated with the developer's application in the Google Developers Console.
<br />
<br />
When a search request subsequently sets the forDeveloper parameter to true, the API server uses the request's authorization credentials to identify the developer. Therefore, a developer can restrict results to videos uploaded through the developer's own app or website but not to videos uploaded through other apps or sites.
        </td>
    </tr>
    <tr>
        <td >
        <b>
        forMine
        </b>
        </td>
        <td>
        <b>boolean</b><br />
        This parameter can only be used in a properly authorized request. The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video. In addition, none of the following other parameters can be set in the same request: videoDefinition, videoDimension, videoDuration, videoLicense, videoEmbeddable, videoSyndicated, videoType.
        </td>
    </tr>
    <tr>
        <td >
        <b>
        relatedToVideoId
        </b>
        </td>
        <td>
        <b>string</b><br />
        The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
        <br />
        <br />
        Note that if the relatedToVideoId parameter is set, the only other supported parameters are part, maxResults, pageToken, regionCode, relevanceLanguage, safeSearch, type (which must be set to video), and fields.
        </td>
    </tr>
    <tr width='100%'>
      <td colspan='2'>
      <b>Optional parameters</b>
      </td>
    </tr>
    <tr>
        <td >
        <b>
        channelId
        </b>
        </td>
        <td>
        <b>string</b><br />
        The channelId parameter indicates that the API response should only contain resources created by the channel.
        <br />
        <br />
        Note: Search results are constrained to a maximum of 500 videos if your request specifies a value for the channelId parameter and sets the type parameter value to video, but it does not also set one of the forContentOwner, forDeveloper, or forMine filters.
        </td>
    </tr>
    <tr>
        <td >
        <b>
        channelType
        </b>
        </td>
        <td>
        <b>string</b><br />
        The channelType parameter lets you restrict a search to a particular type of channel.
        <br />
        <br />
        Acceptable values are:
        <ul>
          <li>any – Return all channels.</li>
          <li>show – Only retrieve shows.</li>
        </ul>
        </td>
    </tr>
    <tr>
        <td >
        <b>
        eventType
        </b>
        </td>
        <td>
        <b>string</b><br />
        The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video.
        <br />
        <br />
        Acceptable values are:
        <ul>
          <li>completed – Only include completed broadcasts.</li>
          <li>live – Only include active broadcasts.</li>
          <li>upcoming – Only include upcoming broadcasts.</li>
        </ul>
        </td>
    </tr>
    <tr>
        <td >
        <b>
        location
        </b>
        </td>
        <td>
        <b>string</b><br />
        The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude coordinates e.g. (37.42307,-122.08427).
        <br />
        <br />
        
        <ul>
          <li>The location parameter value identifies the point at the center of the area.</li>
          <li>The locationRadius parameter specifies the maximum distance that the location associated with a video can be from that point for the video to still be included in the search results.</li>
          
        </ul>
        <br />
        The API returns an error if your request specifies a value for the location parameter but does not also specify a value for the locationRadius parameter.
        </td>
    </tr>
    <tr>
        <td >
        <b>
        locationRadius
        </b>
        </td>
        <td>
        <b>string</b><br />
        The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area.
        <br />
        <br />
        The parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers.
      </td>
    </tr>
    <tr>
        <td >
        <b>
        maxResults
        </b>
        </td>
        <td>
        <b>unsigned integer</b><br />
        The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5.

      </td>
    </tr>


    </table>

    </div>
    </div>
    </>
      )
    }