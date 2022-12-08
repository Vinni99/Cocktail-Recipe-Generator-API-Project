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
// var drinkData = 

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
      }
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
        var drinkButton =document.createElement('button');
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



 // function renderDrink(drinkData) {
//   var searchedDrinks = [];
//       var chosenDrinks;
//       var searchedDrinkDiv = document.querySelector("searched-drink-id");
//       var displayedDrinks = document.querySelector("ul");
//       // $("#searched-drink-id").append(`<ul>`)
//       for (var i = 0; i < drinkData.length; i++) {
//         searchedDrinks[i] = drinkData[i]
//         // chosenDrinks = document.createElement('li');
//         // $("#searched-drink-id").append(`<li>something</li>`)

//         searchedDrinkDiv.appendChild(searchedDrinks[i])
//         // console.log(displayedDrinks)

// }
// }
  
      // for (let key in getRandomDrink) {
      //   let value = getRandomDrink[key];
      //   listItem = document.createElement("li");
      //   listItem.innerHTML = value;
      //   drinkIngredients.appendChild(listItem);
      // }

     

//   Loop to get the multiple measurements
//   var searchedDrink = data.drinks[0];
    
 
//   searchedDrinkDiv.appendChild(drinkMeasurements);

//   var getMeasurements = Object.keys(searchedDrink)
//     .filter(function (measurements){
//       return measurements.indexOf("strMeasurements") == 0;
//     })
//     .reduce(function (measurements, measurement) {
//       if (searchedDrink[measurements] != null) {
//         measurements[measurement] =  searchedDrink[measurement];
//       }
//       return measurements;
      
//     }, {});
  
//       for (let key in getMeasurements) {
//         let value = getMeasurements[key];
//         listItem = document.createElement("li");
//         listItem.innerHTML = value;
//         drinkMeasurements.appendChild(listItem);
//       }


// //Loop to get the multiple instructions
//   var drinkInstructions = document.createElement("ul");
//   searchedDrinkDiv.appendChild(drinkInstructions);

//   var getInstructions = object.keys(searchedDrink)
//     .filter(function (instructions){
//       return instructions.indexOf("strInstructions") == 0;
//     })
//     .reduce(function (instructions, instruction) {
//       if (searchedDrink[instruction] != null) {
//         instructions[instruction] =  searchedDrink[instruction];
//       }
//       return instructions;
      
//     }, {});
  
//       for (let key in getInstructions) {
//         let value = getInstructions[key];
//         listItem = document.createElement("li");
//         listItem.innerHTML = value;
//         drinkInstructions.appendChild(listItem);
//       }
// // add a button in HTML and make it Hidden until API is read?
// //or add a button in Js though the function?





// // Code for saving Data to local storage and rendering it to the Saved Drink Section

// //  Event Listener for button
//   $(".saveBtn").on("click", function () {
//      //Sets the variable for the input of whatever the user puts into the writable section. 
//     var input = $(this).siblings(".searched-drink").val();
//       //Save input  data to local storage
//        localStorage.setItem(input);
//   });



// // function renderSavedDrink() {
//   // Use JSON.parse() to convert text to JavaScript object
// var savedDrink = JSON.parse(localStorage.getItem("searched-drink"));
//   // Check if data is returned, if not exit out of the function
//   if (savedDrink != null) {
//   document.getElementById("strDrink").innerHTML = savedDrink.name;
//   document.getElementById("strIngredient").innerHTML = savedDrink.Ingredient[0];
//   document.getElementById("strInstruction").innerHTML = savedDrink.Instructions[0];
//   document.getElementById("strDrinkThumb").innerHTML = savedDrink.image;
//   document.getElementById("strMeasurements").innerHTML = savedDrink.measurements[0];
//   } else {
//     // return;
//   }


// // can we return render drink function? minus the button


//var drinkInputEl = document.querySelector('#drink-input');
// var searchedDrinkContainerEL = document.querySelector('#drink-container');


   // function drinkSubmitContainer (event) {
//   event.preventDefault();

//   var drinkInput = drinkInputEl.value.trim();

//   if (drinkInput) {
//     getSearchedDrink(drinkInput);

//     drinkContainerEl.textContent = '';
//     drinkInputEl.value = '';
//   } else {
//     alert('Please enter a drink name');// we can not use an alert need a model
//   }
// };


// function getSearchedDrink (drink) {
//   var drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

//   fetch(drinkUrl)
//     .then(function (response) {
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//           console.log(data);
//           displayDrink(data, drink);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       //alert('Unable to connect to thecocktaildb.com');// no alert
//     });
// };

// //Function for Getting the Drink list

// //   fetch(drinkUrl).then(function (response) {
// //     if (response.ok) {
// //       response.json().then(function (data) {
// //         displayDrink(data.items, );
// //       });
// //     } else {
// //       alert('Error: ' + response.statusText);
// //     }
// //   });


// function displayDrink (drink) {}
// //   if (drink.length === 0) {
// //     drinkContainerEl.textContent = 'No drink found.';
// //     return;
// //   }
// //    drinkSearchTerm.textContent = searchTerm;

// //   for (var i = 0; i < drink.length; i++) {
// //     // What is the result of this string concatenation?
// //     // TODO: <Github username>/<Githubrepositoryname>
// //     var drinkName = drink[i].owner.login + '/' + drink[i].name;

// //     var drinkEl = document.createElement('div');
// //     drinkEl.classList = 'list-item flex-row justify-space-between align-center';

// //     var titleEl = document.createElement('span');
// //     titleEl.textContent = drinkName;

// //     drinkEl.appendChild(titleEl);

// //     var statusEl = document.createElement('span');
// //     statusEl.classList = 'flex-row align-center';

// //     if (drink[i].open_issues_count > 0) {
// //       statusEl.innerHTML =
// //         "<i class='fas fa-times status-icon icon-danger'></i>";
// //     } else {
// //       statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
// //     }

// //     drinkEl.appendChild(statusEl);

// //     drinkContainerEl.appendChild(repoEl);
// //   }
//Event Listener for button
//$(".saveBtn").on("click", function () {
    //Sets the variable for the input of whatever the user puts into the writable section. 
   //var input = $(this).siblings(".searched-drink").val();
     //Save input  data to local storage
      //console.log (input)
 //});   