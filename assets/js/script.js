var searchedDrinks = document.getElementById("searched-drink-id"); //corresponds to the div that houses the drinks that are returned from search field.
var fetchNameButton = document.getElementById("name-button");//is the button element to search for drink
var fetchRandomButton = document.getElementById("random-drink-button");//is the button element to search for a random drink
var deleteDrinkBtn = document.createElement('button');//creates the Delete Drink button on Saved Drinks list

// the below function returns all drinks containing the value of the search input and is activated by event listener on line 112
function getDrinks(event) {
  event.preventDefault();
  var searchedDrinkName = document.getElementById("drink-input").value; //captures the value of the input to the search field

  var requestUrl1 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchedDrinkName;//concats the input value to the API

  document.getElementById("searched-drink-id").innerHTML = "";
  fetch(requestUrl1) //fetch request to API
    .then(function (response) {
        return response.json();
    })
    //the below function returns arrays of objects for each drink.  
    .then(function (drinkData) { 
      
      for(let i = 0; i < drinkData.drinks.length; i++) { //loops through the entire array of each returned drink
        var drinkContainerEl = document.createElement('div'); //creates the div to house each returned drink
        console.log(drinkData)
        var drinkButton = document.createElement('button');//button with text of drink name that will saved to local storage and saved drinks list
            drinkButton.addEventListener("click",handleSaveButtonClick);
            drinkButton.setAttribute("class","save-drink-button");
            drinkButton.setAttribute("id",`${i}`);
            drinkButton.textContent = drinkData.drinks[i].strDrink;
            drinkButton.className = "button is-danger";
        var instructions = drinkData.drinks[i].strInstructions;//returns instructions for each returned drink

        var ingredientContainer = document.createElement('ul');//creates list for drink ingredients
       
        //captures each potential line of drink ingredients up to 15 max from drink object
        var drinkIngredients = [drinkData.drinks[i].strIngredient1, drinkData.drinks[i].strIngredient2, drinkData.drinks[i].strIngredient3, drinkData.drinks[i].strIngredient4, drinkData.drinks[i].strIngredient5, drinkData.drinks[i].strIngredient6, drinkData.drinks[i].strIngredient7, drinkData.drinks[i].strIngredient8,drinkData.drinks[i].strIngredient9,drinkData.drinks[i].strIngredient10,drinkData.drinks[i].strIngredient11,drinkData.drinks[i].strIngredient12,drinkData.drinks[i].strIngredient13,drinkData.drinks[i].strIngredient14,drinkData.drinks[i].strIngredient15,];

        var ingredientContainerTitle = document.createElement('h4');//creates heading for the word ingredients
        ingredientContainerTitle.textContent = 'Ingredients: ';//text content for word ingredients
        var instructionTitle = document.createElement('h4');//creates heading for the word instructions
        instructionTitle.textContent = 'Instructions: ';//text content for word instructions
        var instructionsContainer = document.createElement('p');//creates p for the word ingredients
         instructionsContainer.textContent = instructions;//text content for instructions

         //for loop to drill into the drink's ingredient data and not return if null
        for(var j=0; j< drinkIngredients.length; j++){
          if (drinkIngredients[j] !== null){
            var drinkRowData = document.createElement('li');
        
            drinkRowData.textContent = drinkIngredients[j];
          }
          //series of appending elements to render the returned drinks and associated data
          ingredientContainer.append(drinkRowData);
        }

        drinkContainerEl.append(drinkButton,ingredientContainerTitle, ingredientContainer, instructionTitle, instructionsContainer );
        searchedDrinks.append(drinkContainerEl);
      }
})   
};
// the below function returns all drinks containing the value of the search input and is activated by event listener on line 113
function getRandomDrink(event) {
  event.preventDefault();
  var requestUrl2 = "https://www.thecocktaildb.com/api/json/v1/1/random.php"//concats the input value to the API

  document.getElementById("searched-drink-id").innerHTML = "";
  fetch(requestUrl2)//fetch request to API
    .then(function (response) {
         return response.json();
    })
   //the below function returns arrays of objects for each drink.  
    .then(function (randomDrinkData) {
 
          for(let i = 0; i < randomDrinkData.drinks.length; i++) { //loops through the entire array of each returned drink
        var drinkContainerEl = document.createElement('div');//creates the div to house each returned drink
       
        var drinkButton = document.createElement('button');//button with text of drink name that will saved to local storage and saved drinks list
            drinkButton.addEventListener("click",handleSaveButtonClick);
            drinkButton.setAttribute("class","save-drink-button");
            drinkButton.setAttribute("id",`${i}`);
            drinkButton.textContent = randomDrinkData.drinks[i].strDrink;
            drinkButton.className = "button is-danger";
        var instructions = randomDrinkData.drinks[i].strInstructions;//returns instructions for each returned drink
        
        var ingredientContainer = document.createElement('ul');//creates list for drink ingredients
        var ingredientContainerTitle = document.createElement('h4');//creates heading for the word ingredients
        ingredientContainerTitle.textContent = 'Ingredients: ';//text content for Ingredients
        //captures each potential line of drink ingredients up to 15 max from drink object
        var randomDrinkIngredients = [randomDrinkData.drinks[i].strIngredient1, randomDrinkData.drinks[i].strIngredient2, randomDrinkData.drinks[i].strIngredient3, randomDrinkData.drinks[i].strIngredient4, randomDrinkData.drinks[i].strIngredient5, randomDrinkData.drinks[i].strIngredient6, randomDrinkData.drinks[i].strIngredient7, randomDrinkData.drinks[i].strIngredient8, randomDrinkData.drinks[i].strIngredient9, randomDrinkData.drinks[i].strIngredient10, randomDrinkData.drinks[i].strIngredient11,randomDrinkData.drinks[i].strIngredient12, randomDrinkData.drinks[i].strIngredient13, randomDrinkData.drinks[i].strIngredient14, randomDrinkData.drinks[i].strIngredient15,];

        
        var instructionTitle = document.createElement('h4');//creates heading for the word ingredients
        instructionTitle.textContent = 'Instructions: ';//text content for word instructions
        var instructionsContainer = document.createElement('p');//creates p for the word ingredients
        instructionsContainer.textContent = instructions;//text content for instructions

        //for loop to drill into the drink's ingredient data and not return if null   
        for(var j=0; j< randomDrinkIngredients.length; j++) {
          if (randomDrinkIngredients[j] !== null){
            var drinkRowData = document.createElement('li');
                drinkRowData.textContent = randomDrinkIngredients[j];
          }
                //series of appending elements to render the returned drinks and associated data
                ingredientContainer.append(drinkRowData);
        }

     
        drinkContainerEl.append(drinkButton,ingredientContainerTitle, ingredientContainer, instructionTitle, instructionsContainer );
        searchedDrinks.append(drinkContainerEl);

      }
    })   
    }
    
fetchNameButton.addEventListener('click', getDrinks);//Event listener for Search Drink Button
fetchRandomButton.addEventListener('click', getRandomDrink);//Event listener for Random Drink Button

//Below function saves Returned drinks to local storage and Saved Drinks list in UI
function handleSaveButtonClick(event) { 
  let name = event.target.textContent; 
  if (!localStorage.getItem(name)) {
    localStorage.setItem(name, JSON.stringify(name));
    if (savedDrinkLocal !== null) { 
      var savedDrinkContainer = document.getElementById("saved"); 
      var deleteDrinkBtn = document.createElement("button"); 
      deleteDrinkBtn.setAttribute("id", "delete-btn"); 
      deleteDrinkBtn.className = "button is-danger";
      deleteDrinkBtn.innerText = "Delete Drink"; 
      deleteDrinkBtn.addEventListener("click", handleDeleteButton); 
      var savedDrink = document.createElement("ul"); 
      savedDrink.setAttribute("id", name); 
      var savedDrinkLocal = JSON.parse(localStorage.getItem(name)); 
      savedDrinkLocal.textContent = savedDrink; 
    } 
    //Appends drinks to Saved list
    savedDrinkContainer.append(savedDrink, deleteDrinkBtn); 
    savedDrink.append(savedDrinkLocal); 
  } 
} 
  //Below function deletes Returned drinks from local storage and deletes saved Drinks list in UI
function handleDeleteButton(event) { 
  var localStorageKey = event.target.previousElementSibling.textContent
  localStorage.removeItem(localStorageKey);
  event.target.previousElementSibling.remove(); 
  event.target.remove(); 
}

//below let re-renders the data on the saved drinks list.
let renderSavedDrinks = () => { 
  Object.keys(localStorage).forEach((key) => { 
    var savedDrinkContainer = document.getElementById("saved"); 
    var deleteDrinkBtn = document.createElement("button"); 
    deleteDrinkBtn.setAttribute("id", "delete-btn"); 
    deleteDrinkBtn.className = "button is-danger";
    deleteDrinkBtn.innerText = "Delete Drink"; 
    deleteDrinkBtn.addEventListener("click", handleDeleteButton); 
    var savedDrink = document.createElement("ul"); 
    savedDrink.setAttribute("id", key); 
    var savedDrinkLocal = JSON.parse(localStorage.getItem(key)); 
    savedDrinkLocal.textContent = savedDrink; 
    savedDrinkContainer.append(savedDrink, deleteDrinkBtn); 
    savedDrink.append(savedDrinkLocal); 
  }); 
}; 
renderSavedDrinks();//calls the above



// function reRenderSaved() {
//   for(let i = 0; i < localStorage.length; i++);
//     var locallyStoredDrinks = localStorageKey[i];
//     var listItem = document.createElement('h4')
//     listItem.
    
//     // if (!localStorage.getItem(locallyStoredDrinks)) 
//       // localStorage.setItem(locallyStoredDrinks, JSON.stringify(locallyStoredDrinks));
//       if (savedDrinkLocal !== null);
//         var savedDrinkContainer = document.getElementById("saved"); 
//         var deletDrinkBtn = document.createElement("button"); 
//         deleteDrink.setAttribute("id", "delete-btn"); 
//         deleteDrink.innerText = "delete drink"; 
//         deleteDrink.addEventListener("click", handleDeleteButton); 
//         var savedDrink = document.createElement("ul"); 
//         savedDrink.setAttribute("id", locallyStoredDrinks); 
//         var savedDrinkLocal = JSON.parse(localStorage.getItem(locallyStoredDrinks)); 
//         savedDrinkLocal.textContent = savedDrink; 
     
//       savedDrinkContainer.append(savedDrink, deleteDrink); 
//       savedDrink.append(savedDrinkLocal); 
    
//     };

  


























// function handleSaveButtonClick(event) {
  
//   if(!event.target.matches(".save-drink-button")) {
//     return;
//   }
//     let name = event.target.textContent;
//     // var index = event.target.getAttribute("id");
//     // console.log(index);
//     localStorage.setItem(name, JSON.stringify(name));
   
//  if(savedDrinkLocal !== null) {
//     var savedDrinkContainer = document.getElementById('saved');
//     var savedDrinkList = document.createElement('div');
//         savedDrinkList.setAttribute('id', 'saved-drink-list');
//     var savedDrinkItem= document.createElement('h4');
//         savedDrinkItem.setAttribute("id",'saved-drink-list-item');
   
//         deleteDrinkBtn.setAttribute('id', 'delete-btn');
//         deleteDrinkBtn.innerText = "delete drink";
//     var savedDrinkLocal = JSON.parse(localStorage.getItem(name));
//         savedDrinkLocal.textContent = savedDrinkItem;
//         // savedDrinkLocal.setAttribute('class', 'saved-item')
   
//     // console.log(savedDrinkLocal)  
//  }

//  savedDrinkContainer.append(savedDrinkItem, deleteDrinkBtn);
//     savedDrinkItem.append(savedDrinkLocal);
    
// deleteDrinkBtn.addEventListener("click", function(event) {
//   var deleteElement = event.target;
//   // console.log(deleteElement);

//   // Checks if element is a button
//   if (deleteElement.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = deleteElement.parentElement.getAttribute("saved-drink-list-item");
//     localStorage.removeItem(index)

//     if (index === null) {
//       localStorage.getItem()

//     }
//     // var deletedLocalDrinks = localStorage.getItem(index)
    
//     console.log(index)
//     // Store updated todos in localStorage, re-render the list
//     // storeTodos();
//     // renderTodos();
//   }
// });
// };


// function deleteDrinkExe(event) {
//   let buttonElement = event.target;
//   if (buttonElement.matches('button') === true) {
//   var index2 = localStorage.removeItem(0);
//   drinks.splice(index2, 1);
//   console.log(index2``);
//   } 
//   }
   
    // deleteDrink.addEventListener('click', deleteDrinkExe);
// }

// }; 


// var drink = document.getElementById("");
// var saveDrinkButton = document.getElementById("save-drink-button");
//drinkButton.addEventListener("click",handleSaveButtonClick) 
// drinkButton.addEventListener("click",handleSaveButtonClick) 