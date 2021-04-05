import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
const apiKey = process.env.REACT_APP_NASA_KEY;
const exampleYouTube = {
  "kind": "youtube#searchListResponse",
  "etag": "8KND9hH4lSbXhG6A_b5HyaNif48",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
  "totalResults": 37925,
  "resultsPerPage": 5
  },
  "items": [
  {
  "kind": "youtube#searchResult",
  "etag": "2152aIeXS2lB7LXXUTPKoAu_-cM",
  "id": {
  "kind": "youtube#video",
  "videoId": "W6NZfCO5SIk"
  },
  "snippet": {
  "publishedAt": "2018-04-24T02:37:33Z",
  "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
  "title": "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
  "description": "⭐️ Want to learn more from me? Check out these links: Courses: https://codewithmosh.com Twitter: https://twitter.com/moshhamedani Facebook: ...",
  "thumbnails": {
  "default": {
  "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/default.jpg",
  "width": 120,
  "height": 90
  },
  "medium": {
  "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/mqdefault.jpg",
  "width": 320,
  "height": 180
  },
  "high": {
  "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
  "width": 480,
  "height": 360
  }
  },
  "channelTitle": "Programming with Mosh",
  "liveBroadcastContent": "none",
  "publishTime": "2018-04-24T02:37:33Z"
  }}]} 

  const exampleYouTube2 = {
    "kind": "youtube#searchListResponse",
    "etag": "cOZsTdaUoqu5W7NrrJGPYQAHxhs",
    "nextPageToken": "CAUQAA",
    "regionCode": "US",
    "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
    },
    "items": [
    {
    "kind": "youtube#searchResult",
    "etag": "9hjRxH8paZFuoYLlDs5lJsCdWQs",
    "id": {
    "kind": "youtube#playlist",
    "playlistId": "PLzJa2ObuV8P1GStvXplAJauTnGsesvQ3F"
    },
    "snippet": {
    "publishedAt": "2020-03-23T16:26:43Z",
    "channelId": "UClD4ebAIStmn3aAezlN7Dsg",
    "title": "Head Basketball - Campaign",
    "description": "",
    "thumbnails": {
    "default": {
    "url": "https://i.ytimg.com/vi/HISF732ma5Q/default.jpg",
    "width": 120,
    "height": 90
    },
    "medium": {
    "url": "https://i.ytimg.com/vi/HISF732ma5Q/mqdefault.jpg",
    "width": 320,
    "height": 180
    },
    "high": {
    "url": "https://i.ytimg.com/vi/HISF732ma5Q/hqdefault.jpg",
    "width": 480,
    "height": 360
    }
    },
    "channelTitle": "Of Gaming and Men",
    "liveBroadcastContent": "none",
    "publishTime": "2020-03-23T16:26:43Z"
    }}]} 

    const exampleYouTube3 = {
      "kind": "youtube#searchListResponse",
      "etag": "hLEFRMByFUtW2T6Ieuc_8YRhuvc",
      "nextPageToken": "CAUQAA",
      "regionCode": "US",
      "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 5
      },
      "items": [
      {
      "kind": "youtube#searchResult",
      "etag": "ynNIVnoXAcUEHeR57BTNePMW0Do",
      "id": {
      "kind": "youtube#video",
      "videoId": "mYfoh0xLKeQ"
      },
      "snippet": {
      "publishedAt": "2018-01-07T12:15:18Z",
      "channelId": "UCR-foyF-C6VuAlwy3KZMkgA",
      "title": "BITCOIN में INVESTMENT करें या नहीं I Complete Analysis I Dr Vivek Bindra",
      "description": "In this Video Dr. Vivek Bindra discusses about Bitcoin. Dr Vivek Bindra shares in detail whether you should invest in Bitcoin or not. Dr Vivek Bindra shares his ...",
      "thumbnails": {
      "default": {
      "url": "https://i.ytimg.com/vi/mYfoh0xLKeQ/default.jpg",
      "width": 120,
      "height": 90
      },
      "medium": {
      "url": "https://i.ytimg.com/vi/mYfoh0xLKeQ/mqdefault.jpg",
      "width": 320,
      "height": 180
      },
      "high": {
      "url": "https://i.ytimg.com/vi/mYfoh0xLKeQ/hqdefault.jpg",
      "width": 480,
      "height": 360
      }
      },
      "channelTitle": "Dr. Vivek Bindra: Motivational Speaker",
      "liveBroadcastContent": "none",
      "publishTime": "2018-01-07T12:15:18Z"
      }}]}

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
    <tr>
        <td >
        <b>
        onBehalfOfContentOwner
        </b>
        </td>
        <td>
        <b>string</b><br />
        This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.
        <br />
        <br />
        The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.

      </td>
    </tr>
    <tr>
        <td >
        <b>
        order
        </b>
        </td>
        <td>
        <b>string</b><br />
        The order parameter specifies the method that will be used to order resources in the API response. The default value is relevance.
        <br />
        <br />
        Acceptable values are:
        <ul>
          <li>date – Resources are sorted in reverse chronological order based on the date they were created.</li>
          <li>rating – Resources are sorted from highest to lowest rating.</li>        
          <li>relevance – Resources are sorted based on their relevance to the search query. This is the default value for this parameter.</li>
          <li>title – Resources are sorted alphabetically by title.</li>
          <li>videoCount – Channels are sorted in descending order of their number of uploaded videos.</li>
          <li>viewCount – Resources are sorted from highest to lowest number of views. For live broadcasts, videos are sorted by number of concurrent viewers while the broadcasts are ongoing.</li>
        </ul>
      </td>
    </tr>
    <tr>
        <td >
        <b>
        pageToken
        </b>
        </td>
        <td>
        <b>string</b><br />
        The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
      </td>
    </tr>
    <tr>
        <td >
        <b>
        publishedAfter
        </b>
        </td>
        <td>
        <b>datetime</b><br />
        The publishedAfter parameter indicates that the API response should only contain resources created at or after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
      </td>
    </tr>
    <tr>
        <td >
        <b>
        publishedBefore
        </b>
        </td>
        <td>
        <b>datetime</b><br />
        The publishedBefore parameter indicates that the API response should only contain resources created before or at the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
      </td>
    </tr>
    <tr>
        <td >
        <b>
        q
        </b>
        </td>
        <td>
        <b>string</b><br />
        The q parameter specifies the query term to search for.
        <br/>
        <br />
        Your request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search terms. For example, to search for videos matching either "boating" or "sailing", set the q parameter value to boating|sailing. Similarly, to search for videos matching either "boating" or "sailing" but not "fishing", set the q parameter value to boating|sailing -fishing. Note that the pipe character must be URL-escaped when it is sent in your API request. The URL-escaped value for the pipe character is %7C.
      </td>
    </tr>
    <tr>
        <td >
        <b>
        regionCode
        </b>
        </td>
        <td>
        <b>string</b><br />
        The regionCode parameter instructs the API to return search results for videos that can be viewed in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.

      </td>
    </tr>
    <tr>
        <td >
        <b>
        relevanceLanguage
        </b>
        </td>
        <td>
        <b>string</b><br />
        The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese. Please note that results in other languages will still be returned if they are highly relevant to the search query term.

      </td>
    </tr>
    <tr>
        <td >
        <b>
        safeSearch
        </b>
        </td>
        <td>
        <b>string</b><br />
        The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.
        <br />
        <br />
        Acceptable values are:
        <ul>
          <li>moderate – YouTube will filter some content from search results and, at the least, will filter content that is restricted in your locale. Based on their content, search results could be removed from search results or demoted in search results. This is the default parameter value.</li>
          <li>
          none – YouTube will not filter the search result set.
          </li>
          <li>
          strict – YouTube will try to exclude all restricted content from the search result set. Based on their content, search results could be removed from search results or demoted in search results.
          </li>
        </ul>
        </td>
    </tr>
    <tr>
        <td >
        <b>
        type
        </b>
        </td>
        <td>
        <b>string</b><br />
        The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types. The default value is video,channel,playlist.
        <br />
        <br />
        Acceptable values are:
        <ul>
          <li>channel</li>
          <li>
          playlist
          </li>
          <li>
          video
          </li>
        </ul>
        </td>
    </tr>
    <tr>
        <td >
        <b>
        videoCaption
        </b>
        </td>
        <td>
        <b>string</b><br />
        The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video.
        <br />
        <br />
        Acceptable values are:
        <ul>
          <li>any – Do not filter results based on caption availability.</li>
          <li>
          closedCaption – Only include videos that have captions.
          </li>
          <li>
          none – Only include videos that do not have captions.
          </li>
        </ul>
        </td>
    </tr>
    <tr>
        <td >
        <b>
        videoCategoryId
        </b>
        </td>
        <td>
        <b>string</b><br />
        The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video.
        
        </td>
    </tr>
    <tr>
        <td >
        <b>
        videoDefinition
        </b>
        </td>
        <td>
        <b>string</b><br />
        The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. If you specify a value for this parameter, you must also set the type parameter's value to video.
        <br />
        <br />
        Acceptable values are:
        <ul>
          <li>any – Return all videos, regardless of their resolution.</li>
          <li>
          high – Only retrieve HD videos.
          </li>
          <li>
          standard – Only retrieve videos in standard definition.
          </li>
        </ul>
        </td>
    </tr>
    <tr>
        <td >
        <b>
        videoEmbeddable
        </b>
        </td>
        <td>
        <b>string</b><br />
        The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.
        <br />
        <br />
        Acceptable values are:
        <ul>
          <li>any – Return all videos, embeddable or not.</li>
          <li>
          true – Only retrieve embeddable videos.
          </li>
          
        </ul>
        </td>
    </tr>
    <tr>
        <td >
        <b>
        videoLicense
        </b>
        </td>
        <td>
        <b>string</b><br />
        The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
        <br />
        <br />
        Acceptable values are:
        <ul>
          <li>any – Return all videos, regardless of which license they have, that match the query parameters.</li>
          <li>
          creativeCommon – Only return videos that have a Creative Commons license. Users can reuse videos with this license in other videos that they create
          </li>
          <li>
          youtube – Only return videos that have the standard YouTube license.
          </li>
        </ul>
        </td>
    </tr>
    <tr>
        <td >
        <b>
        videoLicense
        </b>
        </td>
        <td>
        <b>string</b><br />
        The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video.
        <br />
        <br />
        Acceptable values are:
        <ul>
          <li>any – Return all videos, syndicated or not.</li>
          <li>
          true – Only retrieve syndicated videos.
          </li>

        </ul>
        </td>
    </tr>
    <tr>
        <td >
        <b>
        videoType
        </b>
        </td>
        <td>
        <b>string</b><br />
        The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
        <br />
        <br />
        Acceptable values are:
        <ul>
          <li>any – Return all videos.</li>
          <li>
          episode – Only retrieve episodes of shows.
          </li>
          <li>
          movie – Only retrieve movies.
          </li>
        </ul>
        </td>
    </tr>
    
    </table>
    </div>
    <br />
    <br/>
    <br />
    <h2>Querying the API:</h2>
    <div className='exampleTopDiv'>
      <h2>Examples:</h2>
      <hr className='exampleHr' />
      <br />
      <h4><i>https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=javascriptI&type=video&videoCaption=closedCaption&key=API-KEY</i></h4>
      <p>This request performs a <i><b>keyword</b></i> search for <i><b>videos</b></i> about <i><b>javascript</b></i> that include <i><b>captions</b></i>.  Example object returned below:</p>
      <pre className='showJson'>
      {JSON.stringify(exampleYouTube, null, 2)}
      </pre>
      <br />
       <br />
       <hr className='exampleHr' />
      <br />
      <h4><i>https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=basketball&type=playlist&key=API-KEY</i></h4>
      <p>This request does a <i><b>playlist</b></i> search for <i><b>basketball</b></i> videos.  Example object returned below:</p>
      <pre className='showJson'>
      {JSON.stringify(exampleYouTube2, null, 2)}
      </pre>
      <br />
       <br />
       <hr className='exampleHr' />
      <br />
      <h4><i>https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=bitcoin&type=video&order=viewCount&key=API-KEY</i></h4>
      <p>This request does a <i><b>video</b></i> search for <i><b>bitcoin</b></i> and returns them in order of <i><b>viewCount</b></i>  Example object returned below:</p>
      <pre className='showJson'>
      {JSON.stringify(exampleYouTube3, null, 2)}
      </pre>
      <br />
       <br />
    </div>
    </div>
    </>
      )
    }