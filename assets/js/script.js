


//Todo
//https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a


//Billy Code Work 
//Get Drink from API by drink name
    //Event Listener
    //Click button
    //Fetch call to API
    //fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then(function(response){
  //return response.json()}).then(function (data){console.log(data)})
        //Pick what info we want (Parameters)
        //Display the fetched API data
        //https://w3collective.com/fetch-display-api-data-javascript/

//Get Drink from API by drink ingredient
    //See above

//James Code Work
//Save Drink from the APi
    //add from JS a button to the API data
    //Event Listenre
    //Store to local storage
    //Add JS Elements

//Vinicius Code Work
//CSS  structure and code work

//Kim Code Work
//Event Listener for button
//$(".saveBtn").on("click", function () {
    //Sets the variable for the input of whatever the user puts into the writable section. 
   //var input = $(this).siblings(".searched-drink").val();
     //Save input  data to local storage
      //console.log (input)
 //});
var searchedDrinks = document.getElementById("searched-drink-id")
var fetchNameButton = document.getElementById("name-button")
var fetchRandomButton = document.getElementById("random-drink-button")
var drinkButton =document.createElement('button');


function getDrinks(event) {
  event.preventDefault()
  var drinkNameContainer = document.getElementById("drink-input").value
 //console.log(drinkNameContainer)
    var requestUrl1 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkNameContainer;
// var requestUrl2 = event.target.name === "nameSearch" ? "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkNameContainer : "Other API CALL HERE"
  // console.log(requestUrl1)

  fetch(requestUrl1)
    .then(function (response) {
        return response.json();
    })
//Need to define what the for loop is looking for here or at least before the for loop itself
    .then(function (drinkData) {
      // console.log(drinkData)
      for(let i = 0; i < drinkData.drinks.length; i++){

        var drinkContainerEl = document.createElement('div')
        // this could also be a button element
        var drinkTitle =document.createElement('h4');
        var drinkButton =document.createElement('button');
        var ingredientContainer = document.createElement('ul');

        console.log(drinkData.drinks[i])
        drinkTitle.textContent = drinkData.drinks[i].strDrink;
        drinkButton.textContent = "Save Drink"
        
        var drinkIngredients = [drinkData.drinks[i].strIngredient1, drinkData.drinks[i].strIngredient2, drinkData.drinks[i].strIngredient3, drinkData.drinks[i].strIngredient4, drinkData.drinks[i].strIngredient5, drinkData.drinks[i].strIngredient6, drinkData.drinks[i].strIngredient7, drinkData.drinks[i].strIngredient8,drinkData.drinks[i].strIngredient9,drinkData.drinks[i].strIngredient10,drinkData.drinks[i].strIngredient11,drinkData.drinks[i].strIngredient12,drinkData.drinks[i].strIngredient13,drinkData.drinks[i].strIngredient14,drinkData.drinks[i].strIngredient15,]
        
        console.log(drinkIngredients)
        
        var ingredientContainerTitle = document.createElement('h5')
        ingredientContainerTitle.textContent = 'Ingredients: '

        for(var j=0; j< drinkIngredients.length; j++){
          if (drinkIngredients[j] !== null){
            var drinkRowData = document.createElement('li')
        
            drinkRowData.textContent = drinkIngredients[j]

          }
          
          ingredientContainer.append(drinkRowData)
        }
// comment this back in to display the button next to the drink name
        drinkTitle.append(drinkButton)
        drinkContainerEl.append(drinkTitle,ingredientContainerTitle, ingredientContainer)
        searchedDrinks.append(drinkContainerEl)
        // drinkRowData.appendChild(createDrinkRow)

      }
      // renderDrink(drinkData)
    
})   
}

function getRandomDrink(event) {
  event.preventDefault()
  
    var requestUrl2 = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
// var requestUrl2 = event.target.name === "nameSearch" ? "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkNameContainer : "Other API CALL HERE"
  // console.log(requestUrl2)

  fetch(requestUrl2)
    .then(function (response) {
        return response.json();
    })

    .then(function (randomDrinkData) {
      console.log(randomDrinkData)

      

      for(let i = 0; i < randomDrinkData.drinks.length; i++){

        var drinkContainerEl = document.createElement('div')
        // this could also be a button element
        var drinkTitle =document.createElement('h4');
       
        var ingredientContainer = document.createElement('ul');

        console.log(randomDrinkData.drinks[i])
        drinkTitle.textContent = randomDrinkData.drinks[i].strDrink;
        drinkButton.textContent = "Save Drink"
        
        var randomDrinkIngredients = [randomDrinkData.drinks[i].strIngredient1, randomDrinkData.drinks[i].strIngredient2, randomDrinkData.drinks[i].strIngredient3, randomDrinkData.drinks[i].strIngredient4, randomDrinkData.drinks[i].strIngredient5, randomDrinkData.drinks[i].strIngredient6, randomDrinkData.drinks[i].strIngredient7, randomDrinkData.drinks[i].strIngredient8, randomDrinkData.drinks[i].strIngredient9, randomDrinkData.drinks[i].strIngredient10, randomDrinkData.drinks[i].strIngredient11,randomDrinkData.drinks[i].strIngredient12, randomDrinkData.drinks[i].strIngredient13, randomDrinkData.drinks[i].strIngredient14, randomDrinkData.drinks[i].strIngredient15,]

        console.log(randomDrinkIngredients)
        
        var ingredientContainerTitle = document.createElement('h5')
        ingredientContainerTitle.textContent = 'Ingredients: '
        
        for(var j=0; j< randomDrinkIngredients.length; j++){
          if (randomDrinkIngredients[j] !== null){
            var drinkRowData = document.createElement('li')
        
            drinkRowData.textContent = randomDrinkIngredients[j]
          }
          ingredientContainer.append(drinkRowData)
        }
// comment this back in to display the button next to the drink name
        drinkTitle.append(drinkButton)
        drinkContainerEl.append(drinkTitle,ingredientContainerTitle, ingredientContainer)
        searchedDrinks.append(drinkContainerEl)
      }
    })   
    }
    


fetchNameButton.addEventListener('click', getDrinks);
fetchRandomButton.addEventListener('click', getRandomDrink);


var drink = document.getElementById("");
var saveDrinkButton = document.getElementById("name-button");
var savedDrinkLocal = document.getElementById("saved-drink-id");


saveDrinkButton.addEventListener("click", function(event,drinkTitle,randomDrinkIngredients) {
  // event.preventDefault();
  var savedDrink = event.target;
localStorage.setItem("savedDrink", JSON.stringify(drinkTitle, randomDrinkIngredients));
console.log(drinkTitle)
console.log(randomDrinkIngredients)

// if (savedDrink.matches("button") === true) {
//   var localDrink = savedDrink.parentElement.getItem("savedDrink");

// }
});





 