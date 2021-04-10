
        import React from 'react';
// import LastFmHome from './LastFmHome';

export default function Examples (props) {

    const exampleData = {
        "name": "Believe",
        "artist": "Disturbed",
        "url": "https://www.last.fm/music/Disturbed/Believe",
        "image": [
        {
        "#text": "https://lastfm.freetls.fastly.net/i/u/34s/dcf5cf4b9da64e979719a102acd222cc.png",
        "size": "small"
        },
        {
        "#text": "https://lastfm.freetls.fastly.net/i/u/64s/dcf5cf4b9da64e979719a102acd222cc.png",
        "size": "medium"
        },
        {
        "#text": "https://lastfm.freetls.fastly.net/i/u/174s/dcf5cf4b9da64e979719a102acd222cc.png",
        "size": "large"
        },
        {
        "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/dcf5cf4b9da64e979719a102acd222cc.png",
        "size": "extralarge"
        }
        ],
        "streamable": "0",
        "mbid": "c559efc2-f734-41ae-93bd-2d78414e0356"
        }

    return (
        <>
            <div className='topSection'>
                <div  className='titleImage'>
            <img src='https://api-go.app/img/lastfm.jpg'></img>
                </div>
                <div className='apiGoLogoDiv'> 
                    <img src='https://api-go.app/img/api-go.png'></img>
                </div>
            </div>
        <br />
        <h2>Your API-KEY is: 3a711b2f895aedb42ef685da4f13b79d</h2>
        <h2>If you dont' have one yet, get your <a target='_blank' href='https://www.last.fm/api#getting-started'>Last FM Api Key</a></h2>
        <h1>Last FM Music Api</h1>
        <div className='exampleIntro'>
            <p>
                The Last FM Music Api is a free api that lets you build your site desired site with Last FM's massive music library data collection. You can get pretty much any information about basically any song, album, and artist. There is also authentication and user features but that will not be covered here. This is information to get your basic GET requests to the api.
            </p>
        </div>
        <br />
        <h1>Api Methods</h1>
        <div className='endpointsDiv'>
  
  
            <h4>
                These are the methods that would be added to the base URL depending on what the desired search for information is needed. <br/>
                NOTE: These methods are only the methods that do NOT authentication,
                <br />
                 for more information about request methods that required authentication please visit the <a href='https://www.last.fm/api#getting-started'>Last FM Api Docs</a>
            </h4>
            <div className='exampleTables1'>
            
            <table className='exampleTable1'>
                <thead>
                <tr>
                    <th colspan="2"><b>method=album</b></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>insert after album</td>
                        <td>params</td>
                    </tr>
                    <tr>
                        <td>.getInfo</td>
                        <td>- artist (required)<br/>- album (required)<br/>- mbid (optional)<br/>- autocorrect (optional)<br/>- username (optional)<br/>- lang(optional)<br/>- api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.getTags</td>
                        <td>- artist (required)<br/>- album <br/>(required)<br/>- mbid (optional)<br/>- autocorrect (optional)<br/>- user <br/>(optional)<br/>- api_key <br/>(required)</td>
                    </tr>
                    <tr>
                        <td>.getTopTags</td>
                        <td>- artist (required)<br/>- album <br/>(required)<br/>- mbid (optional)<br/>- autocorrect (optional)<br/>- api_key <br/>(required)</td>
                    </tr>
                    <tr>
                        <td>.search</td>
                        <td>- limit (optional)<br/>-page (optional)<br/>-album (required)<br/>-api_key (required)</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />
            <br />
            <br />

            <table className='exampleTable1'>
                <thead>
                <tr>
                    <th colspan="2">method=artist</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>insert after album</td>
                        <td>params</td>
                    </tr>
                    <tr>
                        <td>.getCorrection</td>
                        <td>- artist (required)<br/>-api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.getInfo</td>
                        <td>- artist (required)<br/>- mbid (optional)<br/>- lang (optional)<br/>- autocorrect (optional)<br/>- username (optional)<br/>- api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.getSimilar</td>
                        <td>- limit (optional)<br/>- artist (required)<br/>- autocorrect (optional)<br/>- mbid (optional) <br/>- api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.getTags</td>
                        <td>- artist (required)<br/>- mbid (optional)<br/>- user (optional)<br/>- autocorrect (optional)<br/>- api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.getTopAlbums</td>
                        <td>- artist (required)<br/>- mbid (optional)<br/>- autocorrect (optional)<br/>- page (optional)<br/>- limit (optional)<br/>- api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.getTopTags</td>
                        <td>- artist (required)<br/>- mbid (optional)<br/>- autocorrect (optional)<br/>- api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.getTopTracks</td>
                        <td>- artist (required)<br/>- mbid (optional)<br/>- autocorrect (optional)<br/>- page (optional)<br/>- limit (optional)<br/>- api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.search</td>
                        <td>- limit (optional)<br/>- page (optional)<br/>- artist (required)<br/>- api_key (required)</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />
            <br />
            <br />
           
            <table className='exampleTable1'>
                <thead>
                <tr>
                    <th colspan="2">method=track</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>insert after album</td>
                        <td>params</td>
                    </tr>
                    <tr>
                        <td>.getCorrection</td>
                        <td>- artist (required)<br/>- track (required)<br/>-api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.getInfo</td>
                        <td>- artist (required)<br/>- mbid (optional)<br/>- track (required)<br/>- autocorrect (optional)<br/>- username (optional)<br/>- api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.getSimilar</td>
                        <td>- limit (optional)<br/>- track (required)<br/>- artist (required)<br/>- autocorrect (optional)<br/>- mbid (optional) <br/>- api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.getTags</td>
                        <td>- artist (required)<br/>- track (required)<br/>- mbid (optional)<br/>- user (optional)<br/>- autocorrect (optional)<br/>- api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.getTopTags</td>
                        <td>- artist (required)<br/>- track (required)<br/>- mbid (optional)<br/>- autocorrect (optional)<br/>- api_key (required)</td>
                    </tr>
                    <tr>
                        <td>.search</td>
                        <td>- limit (optional)<br/>- page (optional)<br/>- artist (required)<br/>- track (required)<br/>- api_key (required)</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <br />
<br />
<br />
<h1>Querying the API</h1>
            <div className='queryExamplesDiv'>
        Here's an example of the album method that gathers information based upon the query parameters 
            <br />
            <br />
            <i><h4>http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=3a711b2f895aedb42ef685da4f13b79d&format=json</h4></i>
            <br />
            <br />
            Heres an example of the response that you will get back: <br/>
            NOTE: This is just one of the results from the results-albummatches-album arrays within the response object:

            <pre className='showJson'>
                
                {JSON.stringify(exampleData, null, 2)}
            </pre>
            </div>
        </div>
        <br />
        <br />
        <br />
        <h4> Within different endpoints there are required query parameters and some being for user and authentication features. 
            <br />
            To learn what parameters are required for the endpoints please go here: <a href='https://www.last.fm/api#getting-started'>Last FM Api Docs</a></h4>
        <br />
        <br />
        <br />
        </> 
    )
}
        