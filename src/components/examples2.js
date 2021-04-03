
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
const apiKey = process.env.REACT_APP_NASA_KEY;
const everythingJson =
{
  "source": {
  "id": "mashable",
  "name": "Mashable"
  },
  "author": "Proma Khosla",
  "title": "'WandaVision' wraps up with a straightforward finale — and classic MCU tease",
  "description": "WandaVision's ninth and final episode dropped on Friday, a surprisingly straightforward 49 minutes after one of the most sprawling and ambitious experiments in television history. \nThat's refreshing compared to the increasingly bloated run times of superhero …",
  "url": "https://mashable.com/article/wandavision-finale/",
  "urlToImage": "https://mondrian.mashable.com/2021%252F03%252F05%252F97%252F0c7cfdfb9f424b848077da3ef4f18557.be7f7.jpg%252F1200x630.jpg?signature=3E6G9wiOXor7slwRSaIuo_-9aZ4=",
  "publishedAt": "2021-03-05T19:19:37Z",
  "content": "WandaVision's ninth and final episode dropped on Friday, a surprisingly straightforward 49 minutes after one of the most sprawling and ambitious experiments in television history. \r\nThat's refreshing… [+6242 chars]"
  }
export default function Examples() {
//   const [photoData, setPhotoData] = useState([]);
//   useEffect(() => {
//     fetchPhoto();
//     async function fetchPhoto() {
//       const res = await fetch(
//         `https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/photos?sol=34&page=2&api_key=${apiKey}`
//       );
//       const data = await res.json();
//       setPhotoData(data.photos[12]);
//       }
//   }, []);
// console.log(photoData[12])
  return (
  <>
              <div className='topSection'>
            <div  className='titleImage'>
              <img src='/img/news.jpg'></img>
            </div>
            <div className='apiGoLogoDiv'> 
            <img src='/img/api-go.png'></img>
            </div>
        </div>
          <br />
    <NavBar></NavBar>
          
<h1>News API</h1> 
<p>News API allows you to search through over 75,000 news sources and blogs dating back the last 3 years.<br />
  They have 2 main endpoints to query(<i><b>everything</b></i> and <i>top-headlines</i>) with many parameters for each
  </p>
  <h4>***********************  Dont forget to remove key below! **********************</h4>
  <h3>My key for testing:   506994c0ec454ed49cd6d44cbd794afa</h3>
  <br />
  <br />
<div className='exampleContainerDiv'>
<h2>Everything Endpoint</h2>
<div className='exampleTopDiv'>






Endpoints with examples
Everything: https://newsapi.org/v2/everything?q=wandavision&apiKey=NEWS-API-KEY
Searches all sources for articles on Wandavision and will return an object that looks like this:
<pre className='showJson'>
{JSON.stringify(everythingJson, null, 2)}
</pre>
</div>
Top-Headllines   Can really get specific or stay very general with your queries here. 
IMPORTANT point of note you can’t mix sources param with country or category param


First various options:  country
The 2-letter ISO 3166-1 code of the country you want to get headlines for. Possible options: ae ar at  au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za. Note: you can't mix this param with the sources param.
 
category
The category you want to get headlines for. Possible options: business entertainment general health science sports technology. Note: you can't mix this param with the sources param.
 
language
Find sources that display news in a specific language. Possible options: ar de en es fr he it nl no pt ru se ud zh. Default: all languages.
 
Sources:  there are 75,000 sources to pull from getting a list of all of them seems impossible to find?  Examples though are : 
Abc-news  bloomberg  buzzfeed  cnn engadget espn
 
Example end points combining above
Searching just abc-news for just every covid story
https://newsapi.org/v2/everything?sources=abc-news&q=covid&apiKey=506994c0ec454ed49cd6d44cbd794afa
 
Vs just top headline covid story from abc-news https://newsapi.org/v2/top-headlines?sources=abc-news&q=covid&apiKey=506994c0ec454ed49cd6d44cbd794afa
 
			Top headlines from all US sources in the sports category about nba
https://newsapi.org/v2/top-headlines?country=us&category=sports&q=nba&apiKey=506994c0ec454ed49cd6d44cbd794afa
 
 
So questions i think would start like this,,
Once NEWS API chosen
1)Create Top Headlines or everything search?
If top headlines select country then offer country list
ae ar at  au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za
Then offer category list:  business entertainment general health science sports technology. 
 
2) If Create Everything source feed.
Offer country list ae ar at  au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za
 
3) Ask them the category: business entertainment general health science sports technology
 
4)Ask them what they want for the query?  Example answer: bitcoin
Example endpoint created:  
 
https://newsapi.org/v2/everything?q=bitcoin&apiKey=506994c0ec454ed49cd6d44cbd794afa
 
 
 
Then once that's done ask if they want to add more endpoints or stop there?  If add more back to the top and repeat.
</div>
  </>
  );
}