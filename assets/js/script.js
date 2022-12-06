


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

var fetchNameButton = document.getElementById("name-Button")
var fetchIngredientButton = document.getElementById("search-ingredient")


function getDrinks(event) {
  event.preventDefault()
  var drinkNameContainer = document.getElementById("drink-input").value
  console.log(drinkNameContainer)
    var requestUrl1 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkNameContainer;
// var requestUrl2 = event.target.name === "nameSearch" ? "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkNameContainer : "Other API CALL HERE"
  console.log(requestUrl1)

  fetch(requestUrl1)
    .then(function (response) {
// console.log(requestUrl1)
        return response.json();
    })
//Need to define what the for loop is looking for here or at least before the for loop itself
    .then(function (data) {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
      var chosenDrink = document.createElement('li');

      chosenDrink.textContent = data[i].strDrink
        console.log(chosenDrinks)
//.textContent = data[i].html_url;
// drinkNameContainer.appendChild(chosenDrink);
      }
        
    });
      
}
  
function getIngredients(event) {
  event.preventDefault()
  var drinkIngredientContainer = document.getElementById("ingredient-input").value
  console.log(drinkIngredientContainer)
  var requestUrl2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + drinkIngredientContainer;
//console.log(requestUrl2)
     
  fetch(requestUrl2)
    .then(function (response) {
      console.log(requestUrl2)
    return response.json();
    })
//Need to define what the for loop is looking for here or at least before the for loop itself
          .then(function (data) {
            console.log(data)
            renderDrink(data)
          })

// for (var i = 0; i < data.length; i++) {
//var chosenDrink = document.createElement('li');
    
//chosenDrink.textContent = data[i].strDrink
//console.log(chosenDrinks)
//.textContent = data[i].html_url;
//drinkNameContainer.appendChild(chosenDrink);
    
};
            

  fetchNameButton.addEventListener('click', getDrinks);
  fetchIngredientButton.addEventListener('click', getIngredients);

//Function for rendering the API data to the page through JS
function renderDrink (data) {
  var searchedDrink = data.drinks[0]
  var searchedDrinkDiv = document.getElementById("saved-drink")

//Rendering the Drink Name
  var searchedDrinkName = drink.strDrink;
  var heading = document.createElement("h1");
  heading.innerHTML = searchedDrinkName;
  searchedDrinkDiv.appendChild(heading);

//Rendering the Drink Image
  var drinkImg = document.createElement("img")
   drinkImg.src = drink.strDrinkThumb;
  searchedDrinkDiv.appendChild(drinkImg);

   //Loop to get the multiple ingredients
  var drinkIngredients = document.createElement("ul");
  searchedDrinkDiv.appendChild(drinkIngredients);

  var getIngredients = object.keys(searchedDrink)
    .filer(function (ingredient){
      return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function (ingredients, ingredient) {
      if (searchedDrink[ingredient] != null) {
        ingredients[ingredient] =  searchedDrink[ingredient];
      }
      return ingredients;
      
    }, {});
  
      for (let key in getIngredients) {
        let value = getIngredients[key];
        listItem = document.createElement("li");
        listItem.innerHTML = value;
        drinkIngredients.appendChild(listItem);
      }

     

      //Loop to get the multiple measurements
  var drinkMeasurements = document.createElement("ul");
  searchedDrinkDiv.appendChild(drinkMeasurements);

  var getMeasurements = object.keys(searchedDrink)
    .filer(function (measurements){
      return measurements.indexOf("strMeasurements") == 0;
    })
    .reduce(function (measurements, measurement) {
      if (searchedDrink[measurements] != null) {
        measurements[measurement] =  searchedDrink[measurement];
      }
      return measurements;
      
    }, {});
  
      for (let key in getMeasurements) {
        let value = getMeasurements[key];
        listItem = document.createElement("li");
        listItem.innerHTML = value;
        drinkMeasurements.appendChild(listItem);
      }


//Loop to get the multiple instructions
  var drinkInstructions = document.createElement("ul");
  searchedDrinkDiv.appendChild(drinkInstructions);

  var getInstructions = object.keys(searchedDrink)
    .filer(function (instructions){
      return instructions.indexOf("strInstructions") == 0;
    })
    .reduce(function (instructions, instruction) {
      if (searchedDrink[instruction] != null) {
        instructions[instruction] =  searchedDrink[instruction];
      }
      return instructions;
      
    }, {});
  
      for (let key in getInstructions) {
        let value = getInstructions[key];
        listItem = document.createElement("li");
        listItem.innerHTML = value;
        drinkInstructions.appendChild(listItem);
      }
// add a button in HTML and make it Hidden until API is read?
//or add a button in Js though the function?





// Code for saving Data to local storage and rendering it to the Saved Drink Section

//  Event Listener for button
  $(".saveBtn").on("click", function () {
     //Sets the variable for the input of whatever the user puts into the writable section. 
    var input = $(this).siblings(".searched-drink").val();
      //Save input  data to local storage
       localStorage.setItem(input);
  });



// function renderSavedDrink() {
  // Use JSON.parse() to convert text to JavaScript object
var savedDrink = JSON.parse(localStorage.getItem("searched-drink"));
  // Check if data is returned, if not exit out of the function
  if (savedDrink != null) {
  document.getElementById("strDrink").innerHTML = savedDrink.name;
  document.getElementById("strIngredient").innerHTML = savedDrink.Ingredient[0];
  document.getElementById("strInstruction").innerHTML = savedDrink.Instructions[0];
  document.getElementById("strDrinkThumb").innerHTML = savedDrink.image;
  document.getElementById("strMeasurements").innerHTML = savedDrink.measurements[0];
  } else {
    return;
  }
}

// can we return render drink function? minus the button





























  


































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
