
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
  const everythingJson2 = {
    
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": "Noor Zainab Hussain, Carolyn Cohn",
      "title": "As Tesla takes the plunge, wary insurers watch crypto craze from the sidelines - Reuters UK",
      "description": "If Elon Musk's Tesla wanted to insure all of its recent $1.5 billion bitcoin investment against the myriad of pitfalls it could encounter, like hacks, theft and fraud, it would be out of luck.",
      "url": "https://www.reuters.com/article/us-crypto-currency-insurance-focus-idUSKBN2BO5IX",
      "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20210401&t=2&i=1557030921&r=LYNXMPEH302WP&w=800",
      "publishedAt": "2021-04-01T13:12:00Z",
      "content": "(Reuters) - If Elon Musks Tesla wanted to insure all of its recent $1.5 billion bitcoin investment against the myriad of pitfalls it could encounter, like hacks, theft and fraud, it would be out of l… [+5114 chars]"
      
  }
  const everythingJson3  =
  {
    "source": {
    "id": "mashable",
    "name": "Mashable"
    },
    "author": "Mark Kaufman",
    "title": "See where NASA just zapped this odd Martian rock with a laser",
    "description": "On day 37 of its Martian mission (known as \"sol 37\"), the Perseverance rover zapped a curious, holey rock with a laser 10 times. \nIt wasn't for sport. The laser is part of the rover's SuperCam, which looms atop the car-sized robot like a crow's nest on a ship…",
    "url": "https://mashable.com/article/mars-perseverance-rover-zapped-rock-laser/",
    "urlToImage": "https://mondrian.mashable.com/2021%252F04%252F03%252F4d%252F74b261f103fb446296caeecce8d727e3.b28e9.png%252F1200x630.png?signature=ui7NYiefofM6K-n0F4jtLi33Q5g=",
    "publishedAt": "2021-04-03T17:17:31Z",
    "content": "On day 37 of its Martian mission (known as \"sol 37\"), the Perseverance rover zapped a curious, holey rock with a laser 10 times. \r\nIt wasn't for sport. The laser is part of the rover's SuperCam, whic… [+2556 chars]"
    }
    const topHeadlinesJson = {
      "source": {
      "id": "independent",
      "name": "Independent"
      },
      "author": "Jacob Stolworthy",
      "title": "DMX: Rapper in ‘grave condition’ after drug overdose triggers heart attack, report says - The Independent",
      "description": "Rapper is said to be in a ‘vegetative state’",
      "url": "https://www.independent.co.uk/arts-entertainment/music/news/dmx-overdose-hospital-drug-heart-attack-b1826418.html",
      "urlToImage": "https://static.independent.co.uk/2021/04/03/16/newFile.jpg?width=1200&auto=webp&quality=75",
      "publishedAt": "2021-04-03T16:14:18Z",
      "content": "DMX is in critical condition after taking a drug overdose, it has been reported.\r\nThe rapper, 50, is believed to have been rushed to a New York hospital on Friday (2 April), with sources claiming the… [+2103 chars]"
      }
const topHeadlinesJson2 =
      {
        "source": {
        "id": "abc-news",
        "name": "ABC News"
        },
        "author": "The Associated Press",
        "title": "Leak at wastewater pond prompts evacuations in Florida",
        "description": "",
        "url": "https://abcnews.go.com/US/wireStory/leak-wastewater-pond-prompts-evacuations-florida-76854872",
        "urlToImage": "null",
        "publishedAt": "2021-04-03T17:14:00Z",
        "content": "BRADENTON, Fla. -- Officials in Florida were evacuating homes and a highway Saturday near a large reservoir of wastewater because of a significant leak that authorities fear could lead to floods and … [+978 chars]"
        }
        const topHeadlinesJson3 =
        {
          "source": {
          "id": "nbc-news",
          "name": "NBC News"
          },
          "author": "Reuters",
          "title": "Amazon acknowledges issue of drivers urinating in bottles in apology to congressman - NBC News",
          "description": "Amazon.com Inc has apologized to U.S. Representative Mark Pocan, admitting to scoring an “own goal” in its initial denial of his suggestion that its drivers were sometimes forced to urinate in bottles during their delivery rounds.",
          "url": "https://www.nbcnews.com/news/us-news/amazon-acknowledges-issue-drivers-urinating-bottles-apology-congressman-n1262965",
          "urlToImage": "https://media1.s-nbcnews.com/j/newscms/2021_13/3461921/210403-amazon-driver-mb-1446_d29b15f392d6f46d9d79a10c84677f1d.nbcnews-fp-1200-630.jpg",
          "publishedAt": "2021-04-03T14:33:00Z",
          "content": "Amazon.com Inc has apologized to U.S. Rep. Mark Pocan, D-Wis., admitting to scoring an own goal in its initial denial of his suggestion that its drivers were sometimes forced to urinate in bottles du… [+1834 chars]"
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
  They have 2 main endpoints to query(<i><b>everything</b></i> and <i>top-headlines</i>) with many parameters for each<br />
  <br />
  
  </p>
  <h4>***********************  Dont forget to remove key below! **********************</h4>
  <h3>My key for testing:   506994c0ec454ed49cd6d44cbd794afa</h3>
  <br />
  <br />
<div className='exampleContainerDiv'>
<h2>Everything Endpoint</h2>
<h4>Everything searches are ideal for news analysis and article discovery</h4>
<div className='exampleTopDiv'>






<h2>Query Parameters:</h2>
<hr className='exampleHr' />
<br />
<table className='exampleTable1'>
<tr> 
    <td>
    <b>apiKey</b>
    </td>
    <td>
    Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.
    </td>
</tr>
<tr> 
    <td>
    <b>q</b>
    </td>
    <td>
    Keywords or phrases to search for in the article title and body.
    </td>
</tr>
<tr> 
    <td>
    <b>sources</b>
    </td>
    <td>
    A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from.
    </td>
</tr>
<tr> 
    <td>
    <b>domains</b>

    </td>
    <td>
    A comma-seperated string of domains (mashable.com, techcrunch.com, engadget.com) to restrict the search to.
    </td>
</tr>
<tr> 
    <td>
    <b>from</b>

    </td>
    <td>
    A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2021-04-03 or 2021-04-03T15:46:09)
    </td>
</tr>
<tr> 
    <td>
    <b>to</b>
    </td>
    <td>
    A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2021-04-03 or 2021-04-03T15:46:09)
    </td>
</tr>
<tr> 
    <td>
    <b>language</b>


    </td>
    <td>
    The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: <b>ar&nbsp;de&nbsp;en&nbsp;es&nbsp;fr&nbsp;he&nbsp;it&nbsp;nl&nbsp;no&nbsp;pt&nbsp;ru&nbsp;se&nbsp;ud&nbsp;zh</b>
    </td>
</tr>

</table>
<br />
<br />
<h2>Everything Endpoint Examples:</h2>
<hr className='exampleHr' />
<h4><i>https://newsapi.org/v2/everything?q=wandavision&apiKey=NEWS-API-KEY</i></h4>
<p>Searches all sources for articles on <i>Wandavision</i> and will return an object that looks like this:</p>
<pre className='showJson'>
{JSON.stringify(everythingJson, null, 2)}
</pre>
<br />
<hr className='exampleHr' />
<br />
<h4><i>https://newsapi.org/v2/everything?q=tesla&from=2021-04-01&to=2021-04-01&sortBy=popularity&apiKey=NEWS-API-KEY</i></h4>
<p>Searches all sources for articles on <i>Tesla</i> from <i>2021-04-01</i> and sorted by <i>populatity</i>and returns 571 sources.  Example object returned below:</p>
<pre className='showJson'>
{JSON.stringify(everythingJson2, null, 2)}
</pre>
<br />
<hr className='exampleHr' />
<br />
<h4><i>https://newsapi.org/v2/everything?domains=engadget.com,mashable.com&apiKey=NEWS-API-KEY</i></h4>
<p>Searches all sources for articles by <i>Engadget</i> and <i>Mashable</i>.  Example object returned below:</p>
<pre className='showJson'>
{JSON.stringify(everythingJson3, null, 2)}
</pre>
<br />
<hr className='exampleHr' />
<br />
<br />
<br />
</div>
<br />
<br />
<br />
<br />
<h2>Top-Headllines Endpoint</h2>  
<h4>Top-Headline searches return breaking news headlines for countries, categories, and singular publishers. 
  <br />This is perfect for use with news tickers or anywhere you want to display live up-to-date news headlines.</h4>
<div className='exampleTopDiv'>
<h2>Query Parameters:</h2>
<hr className='exampleHr' />
<br />
<table className='exampleTable1'>
<tr> 
    <td>
    <b>apiKey</b>
    </td>
    <td>
    Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.
    </td>
</tr>
<tr> 
    <td>
    <b>country</b>
    </td>
    <td>
    The 2-letter ISO 3166-1 code of the country you want to get headlines for. Possible options: <b>ae&nbsp;ar&nbsp;at&nbsp;au&nbsp;be&nbsp;bg&nbsp;br&nbsp;ca&nbsp;ch&nbsp;cn&nbsp;co&nbsp;cu&nbsp;cz&nbsp;de&nbsp;eg&nbsp;fr&nbsp;gb&nbsp;gr&nbsp;
      hk&nbsp;hu&nbsp;id&nbsp;ie&nbsp;il&nbsp;in&nbsp;
      <br />
      it&nbsp;jp&nbsp;kr&nbsp;lt&nbsp;lv&nbsp;ma&nbsp;mx&nbsp;my&nbsp;ng&nbsp;nl&nbsp;no&nbsp;nz&nbsp;ph&nbsp;pl&nbsp;pt&nbsp;ro&nbsp;rs&nbsp;ru&nbsp;sa&nbsp;se&nbsp;sg&nbsp;si&nbsp;sk&nbsp;th&nbsp;tr&nbsp;tw&nbsp;ua&nbsp;us&nbsp;ve&nbsp;
      za</b>. 
      <br />
      Note: you can't mix this param with the sources param.
    </td>
</tr>
<tr> 
    <td>
    <b>category
    </b>
    </td>
    <td>
    The category you want to get headlines for. Possible options: <br />
    <b>business&nbsp;entertainment&nbsp;general&nbsp;health&nbsp;science&nbsp;sports&nbsp;technology</b>.<br /> Note: you can't mix this param with the <b>sources</b> param
    </td>
</tr>
<tr> 
    <td>
    <b>sources
    </b>
    </td>
    <td>
    A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from.
    </td>
</tr>
<tr> 
    <td>
    <b>q</b>
    </td>
    <td>
    Keywords or phrases to search for in the article title and body.
    </td>
</tr>
<tr> 
    <td>
    <b>pageSize</b>
    </td>
    <td>
    The number of results to return per page (request). 20 is the default, 100 is the maximum.
    </td>
</tr>
<tr> 
    <td>
    <b>page</b>
    </td>
    <td>
    Use this to page through the results if the total results found is greater than the page size.
    </td>
</tr>
</table>
<br />
<h2>Top-Headlines Endpoint Examples:</h2>
<hr className='exampleHr' />
<br />
<h4><i>https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY</i></h4>
<p>Searches through all <i>us</i> sources to display the top-headlines.  Example object returned below:</p>
<pre className='showJson'>
{JSON.stringify(topHeadlinesJson, null, 2)}
</pre>
<br />
<hr className='exampleHr' />
<br />
<h4><i>https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=API_KEY</i></h4>
<p>Searches through all of <i>abc-news</i> to display their top-headlines.  Example object returned below:</p>
<pre className='showJson'>
{JSON.stringify(topHeadlinesJson2, null, 2)}
</pre>
<br />
<hr className='exampleHr' />
<br />
<h4><i>https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY</i></h4>
<p>Searches through all of the <i>us</i> and <i>business</i> sources to display their top-headlines.  Example object returned below:</p>
<pre className='showJson'>
{JSON.stringify(topHeadlinesJson3, null, 2)}
</pre>
</div>
</div>
  </>
  );
}