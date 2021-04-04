import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
const apiKey = process.env.REACT_APP_NASA_KEY;
const idOrTitle = {
    "Title": "Superman",
    "Year": "1978",
    "Rated": "PG",
    "Released": "15 Dec 1978",
    "Runtime": "143 min",
    "Genre": "Action, Adventure, Drama, Sci-Fi",
    "Director": "Richard Donner",
    "Writer": "Jerry Siegel (character created by: Superman), Joe Shuster (character created by: Superman), Mario Puzo (story), Mario Puzo (screenplay), David Newman (screenplay), Leslie Newman (screenplay), Robert Benton (screenplay)",
    "Actors": "Marlon Brando, Gene Hackman, Christopher Reeve, Ned Beatty",
    "Plot": "An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero.",
    "Language": "English",
    "Country": "USA, UK, Canada, Switzerland, France",
    "Awards": "Nominated for 3 Oscars. Another 16 wins & 20 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "94%"
    },
    {
    "Source": "Metacritic",
    "Value": "80/100"
    }
    ],
    "Metascore": "80",
    "imdbRating": "7.3",
    "imdbVotes": "160,136",
    "imdbID": "tt0078346",
    "Type": "movie",
    "DVD": "15 Aug 2008",
    "BoxOffice": "$134,451,603",
    "Production": "Dovemead Films",
    "Website": "N/A",
    "Response": "True"
    }
    const idOrTitle2 = {
        "Title": "Seinfeld",
        "Year": "1989–1998",
        "Rated": "TV-PG",
        "Released": "05 Jul 1989",
        "Runtime": "22 min",
        "Genre": "Comedy",
        "Director": "N/A",
        "Writer": "Larry David, Jerry Seinfeld",
        "Actors": "Jerry Seinfeld, Jason Alexander, Michael Richards, Julia Louis-Dreyfus",
        "Plot": "Jerry Seinfeld stars in this television comedy series as himself, a comedian. The premise of this sitcom is Jerry and his friends going through everyday life, discussing various quirky situations that we can all relate to (especially if we live in New York). The eccentric personalities of the offbeat characters who make up Jerry's social circle contribute to the fun.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 3 Golden Globes. Another 71 wins & 185 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "8.8/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "78%"
        }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.8",
        "imdbVotes": "257,792",
        "imdbID": "tt0098904",
        "Type": "series",
        "totalSeasons": "9",
        "Response": "True"
        }
    const idOrTitle3 = {
        "Title": "Godfather",
        "Year": "1991",
        "Rated": "Not Rated",
        "Released": "15 Nov 1991",
        "Runtime": "150 min",
        "Genre": "Comedy, Drama, Romance",
        "Director": "Lal, Siddique",
        "Writer": "Lal (screenplay,  story & dialogue), Siddique",
        "Actors": "N.N. Pillai, Mukesh, Kanaka, Philomina",
        "Plot": "Two rival clans under Anjooran and Achamma have a history of mutual hatred. Anjooran, convinced that women are the root of all evil, ensures that all his sons stay bachelors. The youngest son, Ramabhadran falls in love with Malu, from Achamma's family. A complicated tug-of-war ensues.",
        "Language": "Malayalam",
        "Country": "India",
        "Awards": "2 wins.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTkyYzc5MGEtYTBiYS00ZmYyLThlZWUtOWY3ZWE4ZDhlN2MzXkEyXkFqcGdeQXVyMjM0ODk5MDU@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "8.6/10"
        }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.6",
        "imdbVotes": "3,022",
        "imdbID": "tt0353496",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
        }
        const searchTitle ={
            "Search": [
            {
            "Title": "Batman v Superman: Dawn of Justice",
            "Year": "2016",
            "imdbID": "tt2975590",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            },
            {
            "Title": "Superman Returns",
            "Year": "2006",
            "imdbID": "tt0348150",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
            },
            {
            "Title": "Superman",
            "Year": "1978",
            "imdbID": "tt0078346",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
            },
            {
            "Title": "Superman II",
            "Year": "1980",
            "imdbID": "tt0081573",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
            },
            {
            "Title": "Superman III",
            "Year": "1983",
            "imdbID": "tt0086393",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
            },
            {
            "Title": "Superman IV: The Quest for Peace",
            "Year": "1987",
            "imdbID": "tt0094074",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
            },
            {
            "Title": "Superman/Batman: Apocalypse",
            "Year": "2010",
            "imdbID": "tt1673430",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
            {
            "Title": "Superman/Batman: Public Enemies",
            "Year": "2009",
            "imdbID": "tt1398941",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
            {
            "Title": "Superman: Doomsday",
            "Year": "2007",
            "imdbID": "tt0934706",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjU4MzIyZWUtNWQ4Yy00YTU4LTk5NjUtNDBiNDkxZTVlZDgwXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
            },
            {
            "Title": "Superman II: The Richard Donner Cut",
            "Year": "1980",
            "imdbID": "tt0839995",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDhiNzNhNmMtMjhiZS00Mjc4LWE5ZmEtZjg5YTY2M2FkZmNiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            }
            ],
            "totalResults": "225",
            "Response": "True"
            }
export default function Examples3() {

      return (
      <>
                  <div className='topSection'>
                <div  className='titleImage'>
                  <img src='/img/movie.jpg'></img>
                </div>
                <div className='apiGoLogoDiv'> 
                <img src='/img/api-go.png'></img>
                </div>
            </div>
              <br />
        <NavBar></NavBar>
        <h2> If you dont't have it yet get your Free <a target='_blank' href='http://www.omdbapi.com/apikey.aspx'>OMDB API</a> key</h2>
        <h1>OMDB API</h1> 
     
<p>OMDB API allows you to search through over 75,000 news sources and blogs dating back the last 3 years.<br />
  They have 2 main endpoints to query(<i><b>everything</b></i> and <i>top-headlines</i>) with many parameters for each<br />
  <br />
  
  </p>
  <h4>***********************  Dont forget to remove key below! **********************</h4>
  <h3>My key for testing:  fe27de2</h3>
  <br />
  <br />

<div className='exampleContainerDiv'>
<h1>*** By ID or Title ***</h1>

  <div className='exampleTopDiv'>
<h2>Query Parameters:</h2>
<hr className='exampleHr' />
<br />
<h4>*Please note while both "i" and "t" are optional at least one argument is required.
    <br />Also, take note that query searches using i or t will return just 1 title.  Use s to return multiple titles
</h4>
<table className='exampleTable1'>
<tr> 
    <td>
    <b>PARAMETERS</b>
    </td>
    <td>
    <b>REQUIRED</b>
    </td>
    <td>
    <b>VALID OPTIONS</b>
    </td>
    <td>
    <b>DEFAULT VALUE</b>
    </td>
    <td>
    <b>DESCRIPTION</b>
    </td>
</tr>
<tr> 
    <td>
    <b>i</b>
    </td>
    <td>
    *Optional
    </td>
    <td>
    <b></b>
    </td>
    <td>
    {'<empty>'}
    </td>
    <td>
    A valid IMDb ID (e.g. tt1285016)
    </td>
</tr>
<tr> 
    <td>
    <b>t</b>
    </td>
    <td>
    *Optional
    </td>
    <td>
    
    </td>
    <td>
    {'<empty>'}
    </td>
    <td>
    Movie title to search for
    </td>
</tr>
<tr> 
    <td>
    <b>type</b>
    </td>
    <td>
    no
    </td>
    <td>
    movie, series, episode
    </td>
    <td>
    {'<empty>'}
    </td>
    <td>
    Type of result to return
    </td>
</tr>
<tr> 
    <td>
    <b>y</b>
    </td>
    <td>
    no
    </td>
    <td>
    
    </td>
    <td>
    {'<empty>'}
    </td>
    <td>
    Year of release
    </td>
</tr>
<tr> 
    <td>
    <b>plot</b>
    </td>
    <td>
    no
    </td>
    <td>
    short, full
    </td>
    <td>
    short
    </td>
    <td>
    Return short or full plot
    </td>
</tr>
<tr> 
    <td>
    <b>r</b>
    </td>
    <td>
    no
    </td>
    <td>
    json, xml
    </td>
    <td>
    json
    </td>
    <td>
    The data type to return
    </td>
</tr>
<tr> 
    <td>
    <b>callback</b>
    </td>
    <td>
    no
    </td>
    <td>
    <b></b>
    </td>
    <td>
    {'<empty>'}
    </td>
    <td>
    JSONP callback name
    </td>
</tr>
<tr> 
    <td>
    <b>v</b>
    </td>
    <td>
    no
    </td>
    <td>
    
    </td>
    <td>
    1
    </td>
    <td>
    API version (reserved for future use)
    </td>
</tr>
</table>
<br />
<br />
<h2>Query Examples using i or t:</h2>
<hr className='exampleHr' />
<h4><i>http://www.omdbapi.com/?apikey=API-KEY&t=seinfeld&type=series&plot=full</i></h4>
<p>Search will return the main title for <i><b>Seinfeld</b></i> with the <i><b>type</b></i> of <i><b>series</b></i> and the <i><b>plot</b> </i>is <i><b>full</b> </i>. The query will return an object that looks like this:</p>
<pre className='showJson'>
{JSON.stringify(idOrTitle2, null, 2)}
</pre>
<br />
<br />

<hr className='exampleHr' />
<h4><i>http://www.omdbapi.com/?apikey=API-KEY&i=tt0353496&plot=full</i></h4>
<p>Searches all the movie database for the <i>IMDB ID</i> of  <i>tt0353496</i> and a <i>plot</i> of <i>full</i> and it will return an object that looks like this:</p>
<pre className='showJson'>
{JSON.stringify(idOrTitle3, null, 2)}
</pre>
<br />
</div>
<br />
<br />
<br />
<br />
<h1>*** By Search ***</h1>
<div className='exampleTopDiv'>
<h2>Query Parameters:</h2>
<h4><br />Please note query searches using s will return multiple titles, while using i or t will return just 1 title.</h4>
<hr className='exampleHr' />
<br />
<table className='exampleTable1'>
<tr> 
    <td>
    <b>PARAMETERS</b>
    </td>
    <td>
    <b>REQUIRED</b>
    </td>
    <td>
    <b>VALID OPTIONS</b>
    </td>
    <td>
    <b>DEFAULT VALUE</b>
    </td>
    <td>
    <b>DESCRIPTION</b>
    </td>
</tr>
<tr> 
    <td>
    <b>s</b>
    </td>
    <td>
    yes
    </td>
    <td>
    
    </td>
    <td>
    {'<empty>'}
    </td>
    <td>
    Movie title to search for
    </td>
</tr>
<tr> 
    <td>
    <b>type</b>
    </td>
    <td>
    no
    </td>
    <td>
    movie, series, episode
    </td>
    <td>
    {'<empty>'}
    </td>
    <td>
    Type of result to return
    </td>
</tr>
<tr> 
    <td>
    <b>y</b>
    </td>
    <td>
    no
    </td>
    <td>
    
    </td>
    <td>
    {'<empty>'}
    </td>
    <td>
    Year of release
    </td>
</tr>
<tr> 
    <td>
    <b>r</b>
    </td>
    <td>
    no
    </td>
    <td>
    json, xml
    </td>
    <td>
    json
    </td>
    <td>
    The data type to return.
    </td>
</tr>
<tr> 
    <td>
    <b>page</b>
    </td>
    <td>
    no
    </td>
    <td>
    1 - 100
    </td>
    <td>
    1
    </td>
    <td>
    Page number to return
    </td>
</tr>
<tr> 
    <td>
    <b>callback</b>
    </td>
    <td>
    no
    </td>
    <td>
    
    </td>
    <td>
    {'<empty>'}
    </td>
    <td>
    JSONP callback name
    </td>
</tr>
<tr> 
    <td>
    <b>v</b>
    </td>
    <td>
    no
    </td>
    <td>
    
    </td>
    <td>
    1
    </td>
    <td>
    API version (reserved for future use).
    </td>
</tr>
</table>
<br />
<br />
<br />
<h2>Query Examples using s:</h2>
<hr className='exampleHr' />
<h4><i>http://www.omdbapi.com/?apikey=fe27de2&s=superman&type=movie</i></h4>
<p>Searches the movie database for the <i><b>title</b></i> of  <i><b>superman</b></i> and a <i><b>plot</b></i> of <i><b>full</b></i> <br />will return an object that has an array of 10 objects in and it, and it will look like this:</p>
<pre className='showJson'>
{JSON.stringify(searchTitle, null, 2)}
</pre>
<br />
</div>
</div>

        </>
      )
}