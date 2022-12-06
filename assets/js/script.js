


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
    //Event Listener
    //Store to local storage
    //Add JS Elements

//Vinicius Code Work
//CSS  structure and code work

//Kim Code Work
var fetchButtonName = document.getElementById("name-form")
var fetchButtonIngredient = document.getElementById("ingredient-form")










//Event Listener for button
//$(".saveBtn").on("click", function () {
    //Sets the variable for the input of whatever the user puts into the writable section. 
   //var input = $(this).siblings(".searched-drink").val();
     //Save input  data to local storage
      //console.log (input)
 //});



var fetchNameButton = document.getElementById("name-Button")
var fetchIngredientButton = document.getElementById("ingredient-form")


function getDrinks(event) {
event.preventDefault()
var drinkNameContainer = document.getElementById("drink-input").value
console.log(drinkNameContainer)
    var requestUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkNameContainer;
  console.log(requestUrl)

    fetch(requestUrl)
      .then(function (response) {
        console.log(requestUrl)
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
  
  fetchNameButton.addEventListener('click', getDrinks);

  


//Event Listener for button
//$(".saveBtn").on("click", function () {
    //Sets the variable for the input of whatever the user puts into the writable section. 
   //var input = $(this).siblings(".searched-drink").val();
     //Save input  data to local storage
      //console.log (input)
 //});











// function renderSavedDrink() {
//   // Use JSON.parse() to convert text to JavaScript object
//   var savedDrink = JSON.parse(localStorage.getItem("searched-drink"));
//   // Check if data is returned, if not exit out of the function
//   if (savedDrink !== null) {
//   document.getElementById("strDrink").innerHTML = savedDrink.name;
//   document.getElementById("strIngredient").innerHTML = savedDrink.Ingredient[0];
//   document.getElementById("strInstruction").innerHTML = savedDrink.Instructions[0];
//   document.getElementById("strDrinkThumb").innerHTML = savedDrink.image;
//   document.getElementById("strMeasurements").innerHTML = savedDrink.measurements[0];
//   } else {
//     return;
//   }
// }





















  


































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
