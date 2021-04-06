import React  from "react";
import NavBar from "./NavBar";


const exampleEmdamam ={
    "q": "chicken",
    "from": 0,
    "to": 3,
    "more": true,
    "count": 7000,
    "hits": [
    {
    "recipe": {
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3da1169eb633a5e4607890ebf7dee89f",
    "label": "Grilled Butterflied Chicken Recipe",
    "image": "https://www.edamam.com/web-img/7a2/7a2f41a7891e8a8f8a087a96930c6463.jpg",
    "source": "Serious Eats",
    "url": "http://www.seriouseats.com/recipes/2012/08/grilled-butterflied-chicken-recipe.html",
    "shareAs": "http://www.edamam.com/recipe/grilled-butterflied-chicken-recipe-3da1169eb633a5e4607890ebf7dee89f/chicken/alcohol-free/591-722-cal",
    "yield": 4,
    "dietLabels": [
    "Low-Carb"
    ],
    "healthLabels": [
    "Sugar-Conscious",
    "Keto-Friendly",
    "Paleo",
    "Dairy-Free",
    "Gluten-Free",
    "Wheat-Free",
    "Egg-Free",
    "Peanut-Free",
    "Tree-Nut-Free",
    "Soy-Free",
    "Fish-Free",
    "Shellfish-Free",
    "Pork-Free",
    "Red-Meat-Free",
    "Celery-Free",
    "Mustard-Free",
    "Sesame-Free",
    "Lupine-Free",
    "Mollusk-Free",
    "Alcohol-Free",
    "No oil added",
    "FODMAP-Free",
    "Kosher",
    "Immuno-Supportive"
    ],
    "cautions": [],
    "ingredientLines": [
    "1 whole chicken, 3 1/2 to 4 pounds",
    "Kosher salt and freshly ground black pepper"
    ],
    "ingredients": [
    {
    "text": "1 whole chicken, 3 1/2 to 4 pounds",
    "weight": 1700.9713875,
    "foodCategory": "Poultry",
    "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
    "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
    },
    {
    "text": "Kosher salt and freshly ground black pepper",
    "weight": 10.205828325,
    "foodCategory": "Condiments and sauces",
    "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
    },
    {
    "text": "Kosher salt and freshly ground black pepper",
    "weight": 5.1029141625,
    "foodCategory": "Condiments and sauces",
    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
    }
    ],
    "calories": 2499.628483072875,
    "totalWeight": 1714.2190942311247,
    "totalTime": 60,
    "cuisineType": [
    "mediterranean"
    ],
    "mealType": [
    "lunch/dinner"
    ],
    "dishType": [
    "main course"
    ],
    "totalNutrients": {
    "ENERC_KCAL": {
    "label": "Energy",
    "quantity": 2499.628483072875,
    "unit": "kcal"
    },
    "FAT": {
    "label": "Fat",
    "quantity": 174.35943285279748,
    "unit": "g"
    },
    "FASAT": {
    "label": "Saturated",
    "quantity": 49.92310198999199,
    "unit": "g"
    },
    "FATRN": {
    "label": "Trans",
    "quantity": 1.121960727195,
    "unit": "g"
    },
    "FAMS": {
    "label": "Monounsaturated",
    "quantity": 72.21332845006087,
    "unit": "g"
    },
    "FAPU": {
    "label": "Polyunsaturated",
    "quantity": 37.41106263839175,
    "unit": "g"
    },
    "CHOCDF": {
    "label": "Carbs",
    "quantity": 3.2633136069187505,
    "unit": "g"
    },
    "FIBTG": {
    "label": "Fiber",
    "quantity": 1.2910372831125,
    "unit": "g"
    },
    "SUGAR": {
    "label": "Sugars",
    "quantity": 0.03265865064,
    "unit": "g"
    },
    "PROCNT": {
    "label": "Protein",
    "quantity": 215.66905387248374,
    "unit": "g"
    },
    "CHOLE": {
    "label": "Cholesterol",
    "quantity": 867.495407625,
    "unit": "mg"
    },
    "NA": {
    "label": "Sodium",
    "quantity": 3967.4416670301102,
    "unit": "mg"
    },
    "CA": {
    "label": "Calcium",
    "quantity": 151.79331974134493,
    "unit": "mg"
    },
    "MG": {
    "label": "Magnesium",
    "quantity": 240.13953984356124,
    "unit": "mg"
    },
    "K": {
    "label": "Potassium",
    "quantity": 2254.557739840115,
    "unit": "mg"
    },
    "FE": {
    "label": "Iron",
    "quantity": 10.932315672155212,
    "unit": "mg"
    },
    "ZN": {
    "label": "Zinc",
    "quantity": 15.221122590952376,
    "unit": "mg"
    },
    "P": {
    "label": "Phosphorus",
    "quantity": 1708.35360332175,
    "unit": "mg"
    },
    "VITA_RAE": {
    "label": "Vitamin A",
    "quantity": 475.60860965887497,
    "unit": "µg"
    },
    "VITC": {
    "label": "Vitamin C",
    "quantity": 18.506568696,
    "unit": "mg"
    },
    "THIA": {
    "label": "Thiamin (B1)",
    "quantity": 0.6995074733954999,
    "unit": "mg"
    },
    "RIBF": {
    "label": "Riboflavin (B2)",
    "quantity": 1.3971778976925,
    "unit": "mg"
    },
    "NIA": {
    "label": "Niacin (B3)",
    "quantity": 78.72280987231237,
    "unit": "mg"
    },
    "VITB6A": {
    "label": "Vitamin B6",
    "quantity": 4.063161382462875,
    "unit": "mg"
    },
    "FOLDFE": {
    "label": "Folate equivalent (total)",
    "quantity": 70.267128017625,
    "unit": "µg"
    },
    "FOLFD": {
    "label": "Folate (food)",
    "quantity": 70.267128017625,
    "unit": "µg"
    },
    "FOLAC": {
    "label": "Folic acid",
    "quantity": 0,
    "unit": "µg"
    },
    "VITB12": {
    "label": "Vitamin B12",
    "quantity": 3.58564768485,
    "unit": "µg"
    },
    "VITD": {
    "label": "Vitamin D",
    "quantity": 2.313321087,
    "unit": "µg"
    },
    "TOCPHA": {
    "label": "Vitamin E",
    "quantity": 3.52305193779,
    "unit": "mg"
    },
    "VITK1": {
    "label": "Vitamin K",
    "quantity": 25.703378636512497,
    "unit": "µg"
    },
    "WATER": {
    "label": "Water",
    "quantity": 763.9324053454346,
    "unit": "g"
    }
    },
    "totalDaily": {
    "ENERC_KCAL": {
    "label": "Energy",
    "quantity": 124.98142415364374,
    "unit": "%"
    },
    "FAT": {
    "label": "Fat",
    "quantity": 268.2452813119961,
    "unit": "%"
    },
    "FASAT": {
    "label": "Saturated",
    "quantity": 249.61550994995997,
    "unit": "%"
    },
    "CHOCDF": {
    "label": "Carbs",
    "quantity": 1.08777120230625,
    "unit": "%"
    },
    "FIBTG": {
    "label": "Fiber",
    "quantity": 5.164149132450001,
    "unit": "%"
    },
    "PROCNT": {
    "label": "Protein",
    "quantity": 431.3381077449675,
    "unit": "%"
    },
    "CHOLE": {
    "label": "Cholesterol",
    "quantity": 289.165135875,
    "unit": "%"
    },
    "NA": {
    "label": "Sodium",
    "quantity": 165.31006945958794,
    "unit": "%"
    },
    "CA": {
    "label": "Calcium",
    "quantity": 15.179331974134493,
    "unit": "%"
    },
    "MG": {
    "label": "Magnesium",
    "quantity": 57.17608091513363,
    "unit": "%"
    },
    "K": {
    "label": "Potassium",
    "quantity": 47.96931361361948,
    "unit": "%"
    },
    "FE": {
    "label": "Iron",
    "quantity": 60.73508706752895,
    "unit": "%"
    },
    "ZN": {
    "label": "Zinc",
    "quantity": 138.3738417359307,
    "unit": "%"
    },
    "P": {
    "label": "Phosphorus",
    "quantity": 244.05051476024997,
    "unit": "%"
    },
    "VITA_RAE": {
    "label": "Vitamin A",
    "quantity": 52.845401073208336,
    "unit": "%"
    },
    "VITC": {
    "label": "Vitamin C",
    "quantity": 20.562854106666666,
    "unit": "%"
    },
    "THIA": {
    "label": "Thiamin (B1)",
    "quantity": 58.292289449624995,
    "unit": "%"
    },
    "RIBF": {
    "label": "Riboflavin (B2)",
    "quantity": 107.47522289942307,
    "unit": "%"
    },
    "NIA": {
    "label": "Niacin (B3)",
    "quantity": 492.0175617019523,
    "unit": "%"
    },
    "VITB6A": {
    "label": "Vitamin B6",
    "quantity": 312.5508755740673,
    "unit": "%"
    },
    "FOLDFE": {
    "label": "Folate equivalent (total)",
    "quantity": 17.56678200440625,
    "unit": "%"
    },
    "VITB12": {
    "label": "Vitamin B12",
    "quantity": 149.40198686875001,
    "unit": "%"
    },
    "VITD": {
    "label": "Vitamin D",
    "quantity": 15.422140579999999,
    "unit": "%"
    },
    "TOCPHA": {
    "label": "Vitamin E",
    "quantity": 23.487012918599998,
    "unit": "%"
    },
    "VITK1": {
    "label": "Vitamin K",
    "quantity": 21.41948219709375,
    "unit": "%"
    }
    },
    "digest": [
    {
    "label": "Fat",
    "tag": "FAT",
    "schemaOrgTag": "fatContent",
    "total": 174.35943285279748,
    "hasRDI": true,
    "daily": 268.2452813119961,
    "unit": "g",
    "sub": [
    {
    "label": "Saturated",
    "tag": "FASAT",
    "schemaOrgTag": "saturatedFatContent",
    "total": 49.92310198999199,
    "hasRDI": true,
    "daily": 249.61550994995997,
    "unit": "g"
    },
    {
    "label": "Trans",
    "tag": "FATRN",
    "schemaOrgTag": "transFatContent",
    "total": 1.121960727195,
    "hasRDI": false,
    "daily": 0,
    "unit": "g"
    },
    {
    "label": "Monounsaturated",
    "tag": "FAMS",
    "schemaOrgTag": null,
    "total": 72.21332845006087,
    "hasRDI": false,
    "daily": 0,
    "unit": "g"
    },
    {
    "label": "Polyunsaturated",
    "tag": "FAPU",
    "schemaOrgTag": null,
    "total": 37.41106263839175,
    "hasRDI": false,
    "daily": 0,
    "unit": "g"
    }
    ]
    },
    {
    "label": "Carbs",
    "tag": "CHOCDF",
    "schemaOrgTag": "carbohydrateContent",
    "total": 3.2633136069187505,
    "hasRDI": true,
    "daily": 1.08777120230625,
    "unit": "g",
    "sub": [
    {
    "label": "Carbs (net)",
    "tag": "CHOCDF.net",
    "schemaOrgTag": null,
    "total": 1.9722763238062504,
    "hasRDI": false,
    "daily": 0,
    "unit": "g"
    },
    {
    "label": "Fiber",
    "tag": "FIBTG",
    "schemaOrgTag": "fiberContent",
    "total": 1.2910372831125,
    "hasRDI": true,
    "daily": 5.164149132450001,
    "unit": "g"
    },
    {
    "label": "Sugars",
    "tag": "SUGAR",
    "schemaOrgTag": "sugarContent",
    "total": 0.03265865064,
    "hasRDI": false,
    "daily": 0,
    "unit": "g"
    },
    {
    "label": "Sugars, added",
    "tag": "SUGAR.added",
    "schemaOrgTag": null,
    "total": 0,
    "hasRDI": false,
    "daily": 0,
    "unit": "g"
    }
    ]
    },
    {
    "label": "Protein",
    "tag": "PROCNT",
    "schemaOrgTag": "proteinContent",
    "total": 215.66905387248374,
    "hasRDI": true,
    "daily": 431.3381077449675,
    "unit": "g"
    },
    {
    "label": "Cholesterol",
    "tag": "CHOLE",
    "schemaOrgTag": "cholesterolContent",
    "total": 867.495407625,
    "hasRDI": true,
    "daily": 289.165135875,
    "unit": "mg"
    },
    {
    "label": "Sodium",
    "tag": "NA",
    "schemaOrgTag": "sodiumContent",
    "total": 3967.4416670301102,
    "hasRDI": true,
    "daily": 165.31006945958794,
    "unit": "mg"
    },
    {
    "label": "Calcium",
    "tag": "CA",
    "schemaOrgTag": null,
    "total": 151.79331974134493,
    "hasRDI": true,
    "daily": 15.179331974134493,
    "unit": "mg"
    },
    {
    "label": "Magnesium",
    "tag": "MG",
    "schemaOrgTag": null,
    "total": 240.13953984356124,
    "hasRDI": true,
    "daily": 57.17608091513363,
    "unit": "mg"
    },
    {
    "label": "Potassium",
    "tag": "K",
    "schemaOrgTag": null,
    "total": 2254.557739840115,
    "hasRDI": true,
    "daily": 47.96931361361948,
    "unit": "mg"
    },
    {
    "label": "Iron",
    "tag": "FE",
    "schemaOrgTag": null,
    "total": 10.932315672155212,
    "hasRDI": true,
    "daily": 60.73508706752895,
    "unit": "mg"
    },
    {
    "label": "Zinc",
    "tag": "ZN",
    "schemaOrgTag": null,
    "total": 15.221122590952376,
    "hasRDI": true,
    "daily": 138.3738417359307,
    "unit": "mg"
    },
    {
    "label": "Phosphorus",
    "tag": "P",
    "schemaOrgTag": null,
    "total": 1708.35360332175,
    "hasRDI": true,
    "daily": 244.05051476024997,
    "unit": "mg"
    },
    {
    "label": "Vitamin A",
    "tag": "VITA_RAE",
    "schemaOrgTag": null,
    "total": 475.60860965887497,
    "hasRDI": true,
    "daily": 52.845401073208336,
    "unit": "µg"
    },
    {
    "label": "Vitamin C",
    "tag": "VITC",
    "schemaOrgTag": null,
    "total": 18.506568696,
    "hasRDI": true,
    "daily": 20.562854106666666,
    "unit": "mg"
    },
    {
    "label": "Thiamin (B1)",
    "tag": "THIA",
    "schemaOrgTag": null,
    "total": 0.6995074733954999,
    "hasRDI": true,
    "daily": 58.292289449624995,
    "unit": "mg"
    },
    {
    "label": "Riboflavin (B2)",
    "tag": "RIBF",
    "schemaOrgTag": null,
    "total": 1.3971778976925,
    "hasRDI": true,
    "daily": 107.47522289942307,
    "unit": "mg"
    },
    {
    "label": "Niacin (B3)",
    "tag": "NIA",
    "schemaOrgTag": null,
    "total": 78.72280987231237,
    "hasRDI": true,
    "daily": 492.0175617019523,
    "unit": "mg"
    },
    {
    "label": "Vitamin B6",
    "tag": "VITB6A",
    "schemaOrgTag": null,
    "total": 4.063161382462875,
    "hasRDI": true,
    "daily": 312.5508755740673,
    "unit": "mg"
    },
    {
    "label": "Folate equivalent (total)",
    "tag": "FOLDFE",
    "schemaOrgTag": null,
    "total": 70.267128017625,
    "hasRDI": true,
    "daily": 17.56678200440625,
    "unit": "µg"
    },
    {
    "label": "Folate (food)",
    "tag": "FOLFD",
    "schemaOrgTag": null,
    "total": 70.267128017625,
    "hasRDI": false,
    "daily": 0,
    "unit": "µg"
    },
    {
    "label": "Folic acid",
    "tag": "FOLAC",
    "schemaOrgTag": null,
    "total": 0,
    "hasRDI": false,
    "daily": 0,
    "unit": "µg"
    },
    {
    "label": "Vitamin B12",
    "tag": "VITB12",
    "schemaOrgTag": null,
    "total": 3.58564768485,
    "hasRDI": true,
    "daily": 149.40198686875001,
    "unit": "µg"
    },
    {
    "label": "Vitamin D",
    "tag": "VITD",
    "schemaOrgTag": null,
    "total": 2.313321087,
    "hasRDI": true,
    "daily": 15.422140579999999,
    "unit": "µg"
    },
    {
    "label": "Vitamin E",
    "tag": "TOCPHA",
    "schemaOrgTag": null,
    "total": 3.52305193779,
    "hasRDI": true,
    "daily": 23.487012918599998,
    "unit": "mg"
    },
    {
    "label": "Vitamin K",
    "tag": "VITK1",
    "schemaOrgTag": null,
    "total": 25.703378636512497,
    "hasRDI": true,
    "daily": 21.41948219709375,
    "unit": "µg"
    },
    {
    "label": "Sugar alcohols",
    "tag": "Sugar.alcohol",
    "schemaOrgTag": null,
    "total": 0,
    "hasRDI": false,
    "daily": 0,
    "unit": "g"
    },
    {
    "label": "Water",
    "tag": "WATER",
    "schemaOrgTag": null,
    "total": 763.9324053454346,
    "hasRDI": false,
    "daily": 0,
    "unit": "g"
    }
    ]
    }
}]}
export default function Examples5() {

    return (
    <>
    <NavBar></NavBar>
                <div className='topSection'>
              <div  className='titleImage'>
                <img src='/img/edamam.jpg'></img>
              </div>
              <div className='apiGoLogoDiv'>  
              <img src='/img/api-go.png'></img>
              </div>
          </div>
            <br />
      
      <h2> If you don't have it yet, get your Free <a target='_blank' href='https://developer.edamam.com/'>Edamam API</a> key</h2>
      <br />
  <h1>Edamam API</h1> 
  <p>Home to APIs based on Nutrition Analysis, Recipe Searching, Meal recommendation and more!</p>
 
  <h4>--Be aware you need to signup separately to use each of their APIs, as they all provide different Ap Id's to use with with each Free account.--</h4>
  
    <br />
  <div className='exampleContainerDiv'>
  <h2>Recipe Search</h2>
  <p><b>Base Path:</b> https://api.edamam.com/search
<br />
For recipes in <i>Spanish</i> you need to access the Beta for it at <b>Path</b>: https://test-es.edamam.com/search
</p>
  <div className='exampleTopDiv'>
  
    <h2>Query Parameters:</h2>
  <h4>* It IS required to have either the <i>q</i> or <i>r</i> parameter in all searches</h4>
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
      <b>TYPE</b>
      </td>
      <td>
      <b>DESCRIPTION</b>
      </td>
  </tr>
  <tr> 
      <td>
      <b>q</b>
      </td>
      <td>
      <b>✔️&nbsp;*</b>
      </td>
      <td>
      <b>string</b>
      </td>
      <td>
      Query text. For example q=chicken.
      </td>
  </tr>
  <tr> 
      <td>
      <b>r</b>
      </td>
      <td>
      <b>✔️&nbsp;*</b>
      </td>
      <td>
      <b>string</b>
      </td>
      <td>
      Returns information about a specific recipe based on its ID
      </td>
  </tr>
  <tr> 
      <td>
      <b>app_id</b>
      </td>
      <td>
      <b>✔️</b>
      </td>
      <td>
      <b>string</b>
      </td>
      <td>
      Your ID specific to the application
      </td>
  </tr>
  <tr> 
      <td>
      <b>app_key</b>
      </td>
      <td>
      <b>✔️</b>
      </td>
      <td>
      <b>string</b>
      </td>
      <td>
      Your application key
      </td>
  </tr>
  <tr> 
      <td>
      <b>from</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>integer</b>
      </td>
      <td>
      First result index (default 0). Example: from=20. The maximum value of the “from” parameter is limitted by the number of results a plan is entitled to.
      </td>
  </tr>
  <tr> 
      <td>
      <b>to</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>integer</b>
      </td>
      <td>
      Last result index (exclusive, default from + 10). Example: to=30
      </td>
  </tr>
  <tr> 
      <td>
      <b>ingr</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>integer</b>
      </td>
      <td>
      Maximum number of ingredients. Example: ingr=5
      </td>
  </tr>
  <tr> 
      <td>
      <b>diet</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>enum</b>
      </td>
      <td>
      Diet label: one of “balanced”, “high-protein”, “high-fiber”, “low-fat”, “low-carb”, “low-sodium”
      </td>
  </tr>
  <tr> 
      <td>
      <b>health</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>enum</b>
      </td>
      <td>
      Health label: One of the Health api parameters listed in Diet and Health Labels table at the end of this documentation. Multiple labels cab be submitted simultaneously this way “health=peanut-free&health=tree-nut-free”
      </td>
  </tr>
  <tr> 
      <td>
      <b>cuisineType</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>enum</b>
      </td>
      <td>
      The type of cuisine of the recipe. You can simultaneously use several cuisines this way “cuisineType=chinese&cuisineType=indian”
      </td>
  </tr>
  <tr> 
      <td>
      <b>mealType</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>enum</b>
      </td>
      <td>
      The type of meal a recipe belongs to – lunch, dinner, breakfast, snack
      </td>
  </tr>
  <tr> 
      <td>
      <b>dishType</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>enum</b>
      </td>
      <td>
      The dish type a recipe belongs to – soup, salad, sandwich etc. You can simultaneously use several dish types this way “dishType=soup&dishType=dessert”
      </td>
  </tr>
  <tr> 
      <td>
      <b>calories</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>range</b>
      </td>
      <td>
      The format is calories=RANGE where RANGE is replaced by the value in kcal. RANGE is in one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative integer numbers. The + symbol needs to be properly encoded. Examples: “calories=100-300” will return all recipes with which have between 100 and 300 kcal per serving.
      </td>
  </tr>
  <tr> 
      <td>
      <b>time</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>range</b>
      </td>
      <td>
      Time range for the total cooking and prep time for a recipe . The format is time=RANGE where RANGE is replaced by the value in minutes. RANGE is in one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative integer numbers. The + symbol needs to be properly encoded. Examples: “time=1%2B” will return all recipes with available total time greater then 1 minute
      </td>
  </tr>
  <tr> 
      <td>
      <b>excluded</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>string</b>
      </td>
      <td>
      Excluding recipes with certain ingredients. The format is excluded=FOOD where FOOD is replaced by the name of the specific food you don’t want to be present in the recipe results. More than one food can be excluded at the same time. Example: excluded=vinegar&excluded=pretzel will exclude any recipes which contain vinegar or pretzels in their ingredient list
      </td>
  </tr>
  <tr> 
      <td>
      <b>callback</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>string</b>
      </td>
      <td>
      Callback parameter for JSONP. This will “envelop” the result in a JavaScript function call to the specified callback. Optional
      </td>
  </tr>
  <tr> 
      <td>
      <b>imageSize</b>
      </td>
      <td>
      <b>❌</b>
      </td>
      <td>
      <b>string</b>
      </td>
      <td>
      This parameter narrows down the search of the recipes based on whether the image size defined is available for the recipe. The possible values are THUMBNAIL, SMALL, REGULAR, and LARGE. See Image Sizes below for dimension specifics and how to get the different sizes with the image URL. Having “imageSize=THUMBNAIL” will return recipes that have an image with THUMBNAIL dimensions available.
      </td>
  </tr>
  </table>
  </div>
  <br />
  <br />
        <br />

  <div className='exampleTopDiv'>
  
    <h2>Search by nutrient range</h2>
    <hr className='exampleHr' />
  <br />
  <p>
  You can specify nutrient ranges by adding parameters in the following form:
  <br />
nutrients[NTR]=RANGE where
<br />
<br />
NTR is one of: CA, CHOCDF, CHOLE, FAMS, FAPU, FASAT, FAT, FATRN, FE, FIBTG, FOLDFE, K, MG, NA, NIA, P, PROCNT, RIBF, <br />SUGAR, THIA, TOCPHA, VITA_RAE, VITB12, VITB6A, VITC, VITD, VITK1 or ZN;
<br />
<br />
and
<br />
<br />
RANGE is in one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative integer numbers.
<br />
<br />
For example:
<br />
nutrients[CA]=50+ means minimum 50 mg calcium, where ‘50+’ has to be properly encoded as ‘50%2B’<br />
nutrients[FAT]=30 means maximum 30 g fat and<br />
nutrients[FE]=5-10 means iron between 5 mg and 10 mg inclusive<br />
note: always encode the URL i.e. nutrients[FE] is nutrients%5BFE%5D<br />
<br />
You can combine more than one nutrient ranges in a search requests
  </p>
  <hr className='exampleHr' />
  <br />
  <table className='exampleTable1'>
  <tr> 
      <td>
      <b>NTR Code</b>
      </td>
      <td>
      <b>Name</b>
      </td>
      <td>
      <b>Unit</b>
      </td>
      <td>
      <b>NTR Code</b>
      </td>
      <td>
      <b>Name</b>
      </td>
      <td>
      <b>Unit</b>
      </td>
  </tr>
  <tr> 
      <td>
      <b>CA</b>
      </td>
      <td>
      Calcium
      </td>
      <td>
      mg
      </td>
      <td>
      <b>ENERC_KCAL</b>
      </td>
      <td>
      Energy
      </td>
      <td>
      kcal
      </td>
  </tr>
  <tr> 
      <td>
      <b>CHOCDF</b>
      </td>
      <td>
      Carbs
      </td>
      <td>
      g
      </td>
      <td>
      <b>NIA</b>
      </td>
      <td>
      Niacin (B3)
      </td>
      <td>
      mg
      </td>
  </tr>
  <tr> 
      <td>
      <b>CHOLE</b>
      </td>
      <td>
      Cholesterol
      </td>
      <td>
      mg
      </td>
      <td>
      <b>P</b>
      </td>
      <td>
      Phosphorus
      </td>
      <td>
      mg
      </td>
  </tr>
  <tr> 
      <td>
      <b>FAMS</b>
      </td>
      <td>
      Monounsaturated
      </td>
      <td>
      g
      </td>
      <td>
      <b>PROCNT</b>
      </td>
      <td>
      Protein
      </td>
      <td>
      g
      </td>
  </tr>
  <tr> 
      <td>
      <b>FAPU</b>
      </td>
      <td>
      Polyunsaturated
      </td>
      <td>
      g
      </td>
      <td>
      <b>RIBF</b>
      </td>
      <td>
      Riboflavin (B2)
      </td>
      <td>
      mg
      </td>
  </tr>
  <tr> 
      <td>
      <b>FASAT</b>
      </td>
      <td>
      Saturated
      </td>
      <td>
      g
      </td>
      <td>
      <b>SUGAR</b>
      </td>
      <td>
      Sugars
      </td>
      <td>
      g
      </td>
  </tr>
  <tr> 
      <td>
      <b>FAT</b>
      </td>
      <td>
      Fat
      </td>
      <td>
      g
      </td>
      <td>
      <b>THIA</b>
      </td>
      <td>
      Thiamin (B1)
      </td>
      <td>
      mg
      </td>
  </tr>
  <tr> 
      <td>
      <b>FATRN</b>
      </td>
      <td>
      Trans
      </td>
      <td>
      g
      </td>
      <td>
      <b>TOCPHA</b>
      </td>
      <td>
      Vitamin E
      </td>
      <td>
      mg
      </td>
  </tr>
  <tr> 
      <td>
      <b>FE</b>
      </td>
      <td>
      Iron
      </td>
      <td>
      mg
      </td>
      <td>
      <b>VITA_RAE</b>
      </td>
      <td>
      Vitamin A
      </td>
      <td>
      æg
      </td>
  </tr>
  <tr> 
      <td>
      <b>FIBTG</b>
      </td>
      <td>
      Fiber
      </td>
      <td>
      g
      </td>
      <td>
      <b>VITB12</b>
      </td>
      <td>
      Vitamin B12
      </td>
      <td>
      æg
      </td>
  </tr>
  <tr> 
      <td>
      <b>FOLDFE</b>
      </td>
      <td>
      Folate (Equivalent)
      </td>
      <td>
      æg
      </td>
      <td>
      <b>VITB6A</b>
      </td>
      <td>
      Vitamin B6
      </td>
      <td>
      mg
      </td>
  </tr>
  <tr> 
      <td>
      <b>K</b>
      </td>
      <td>
      Potassium
      </td>
      <td>
      mg
      </td>
      <td>
      <b>VITC</b>
      </td>
      <td>
      Vitamin C
      </td>
      <td>
      mg
      </td>
  </tr>
  <tr> 
      <td>
      <b>MG</b>
      </td>
      <td>
      Magnesium
      </td>
      <td>
      mg
      </td>
      <td>
      <b>VITD</b>
      </td>
      <td>
      Vitamin D
      </td>
      <td>
      æg
      </td>
  </tr>
  <tr> 
      <td>
      <b>NA</b>
      </td>
      <td>
      Sodium
      </td>
      <td>
      mg
      </td>
      <td>
      <b>VITK1</b>
      </td>
      <td>
      Vitamin K
      </td>
      <td>
      æg
      </td>
  </tr>
  </table>
</div>
<br />
    <br/>
    <br />
    <h2>Querying the API:</h2>
    <div className='exampleTopDiv'>
      <h2>Example:</h2>
      <hr className='exampleHr' />
      <br />
      <h4><i>https://api.edamam.com/search?q=chicken&app_id=APP-ID&app_key=APP-KEY&from=0&to=3&calories=591-722&health=alcohol-free/</i></h4>
      <p>This request performs a <i><b>keyword</b></i> search for <i><b>chicken</b></i>, it returns <i><b>0 to 3</b></i> results that range from  <i><b>591 - 792 calories</b></i> and they are <i><b>alcohol-free</b></i>.  Example object of 1 recipe returned below:</p>
      <pre className='showJson'>
      {JSON.stringify(exampleEmdamam, null, 2)}
      </pre>
      </div>
</div>
<br/>
<br/>
<br/>
<br/>
  </>
  )
  }