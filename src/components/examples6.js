import React  from "react";
import NavBar from "./NavBar";

export default function Examples5() {

    return (
    <>
                <div className='topSection'>
              <div  className='titleImage'>
                <img src='/img/pokemon.jpg'></img>
              </div>
              <div className='apiGoLogoDiv'>  
              <img src='/img/api-go.png'></img>
              </div>
          </div>
            <br />
      <NavBar></NavBar>
      <h2> The  <a target='_blank' href='PokéAPI'>PokéAPI</a> is not only FREE to use but you also don't need any keys to use it!</h2>
      <br />
  <h1> PokéAPI</h1> 
  <h4>All the Pokémon data you'll ever need in one place,
easily accessible through a modern RESTful API.</h4>
<hr className='exampleHr' />
    <br />
  <div className='exampleContainerDiv'>
        <h2>Berries</h2>
        <p>
        Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage 
        <br />negation when eaten by Pokémon. Check out Bulbapedia for greater detail.
        </p>
  <div className='exampleTopDiv'>
  
    <h3>Berries endpoint:</h3>
  
  <hr className='exampleHr' />
  <br />
  <table className='exampleTable1'>
  <tr> 
      <td>
      <b>Name</b>
      </td>
      <td>
      <b>Type</b>
      </td>
      <td>
      <b>DESCRIPTION</b>
      </td>
  </tr>
  <tr> 
      <td>
      <b>id</b>
      </td>
      <td>
      integer
      </td>
      <td>
      The identifier for this resource.
      </td>
  </tr>
  </table>
  </div>
  </div>
  </>
  )
  }