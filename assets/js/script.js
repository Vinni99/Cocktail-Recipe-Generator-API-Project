var searchedDrinks = document.getElementById("searched-drink-id");
var fetchNameButton = document.getElementById("name-button");
var fetchRandomButton = document.getElementById("random-drink-button");
var deleteDrinkBtn = document.createElement('button');
var deletedDrinks = "";
// var drinkButton = document.createElement('button');
// var savedDrink = docuemnt.querySelector();

function getDrinks(event) {
  event.preventDefault();
  var searchedDrinkName = document.getElementById("drink-input").value;
  // console.log(searchedDrinkName);
  var requestUrl1 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchedDrinkName;

// var requestUrl2 = event.target.name === "nameSearch" ? "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkNameContainer : "Other API CALL HERE"

  document.getElementById("searched-drink-id").innerHTML = "";
  fetch(requestUrl1)
    .then(function (response) {
        return response.json();
    })
//Need to define what the for loop is looking for here or at least before the for loop itself
    .then(function (drinkData) {
      // console.log(drinkData)
      for(let i = 0; i < drinkData.drinks.length; i++) {
        var drinkContainerEl = document.createElement('div');
        // this could also be a button element per comment below
        // var drinkTitle =document.createElement('h4');
        // drinkTitle.textContent = drinkData.drinks[i].strDrink;
        var drinkButton = document.createElement('button');
            drinkButton.addEventListener("click",handleSaveButtonClick);
            drinkButton.setAttribute("class","save-drink-button");
            drinkButton.setAttribute("id",`${i}`);
            drinkButton.textContent = drinkData.drinks[i].strDrink;
            drinkButton.className = "button is-danger";
        var instructions = drinkData.drinks[i].strInstructions;

        var ingredientContainer = document.createElement('ul');

        // console.log(drinkData.drinks[i]);
       
        var drinkIngredients = [drinkData.drinks[i].strIngredient1, drinkData.drinks[i].strIngredient2, drinkData.drinks[i].strIngredient3, drinkData.drinks[i].strIngredient4, drinkData.drinks[i].strIngredient5, drinkData.drinks[i].strIngredient6, drinkData.drinks[i].strIngredient7, drinkData.drinks[i].strIngredient8,drinkData.drinks[i].strIngredient9,drinkData.drinks[i].strIngredient10,drinkData.drinks[i].strIngredient11,drinkData.drinks[i].strIngredient12,drinkData.drinks[i].strIngredient13,drinkData.drinks[i].strIngredient14,drinkData.drinks[i].strIngredient15,];

        var ingredientContainerTitle = document.createElement('h4');
        ingredientContainerTitle.textContent = 'Ingredients: ';
        var instructionTitle = document.createElement('h4');
        instructionTitle.textContent = 'Instructions: ';
        var instructionsContainer = document.createElement('p');
         instructionsContainer.textContent = instructions;

        for(var j=0; j< drinkIngredients.length; j++){
          if (drinkIngredients[j] !== null){
            var drinkRowData = document.createElement('li');
        
            drinkRowData.textContent = drinkIngredients[j];
          }
          
          ingredientContainer.append(drinkRowData);
        }
// comment this back in to display the button next to the drink name
        // drinkButton.append(drinkButton)
        // drinkContainerEl.append(drinkButton,ingredientContainerTitle, ingredientContainer);
        drinkContainerEl.append(drinkButton,ingredientContainerTitle, ingredientContainer, instructionTitle, instructionsContainer );
        searchedDrinks.append(drinkContainerEl);
      }
})   
};

function getRandomDrink(event) {
  event.preventDefault();
  var requestUrl2 = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

// var requestUrl2 = event.target.name === "nameSearch" ? "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkNameContainer : "Other API CALL HERE";

  document.getElementById("searched-drink-id").innerHTML = "";
  fetch(requestUrl2)
    .then(function (response) {
         return response.json();
    })
    .then(function (randomDrinkData) {
      // console.log(randomDrinkData);
          for(let i = 0; i < randomDrinkData.drinks.length; i++) {
        var drinkContainerEl = document.createElement('div');
        // this could also be a button element per below
        // var drinkTitle = document.createElement('h4');
        // drinkTitle.textContent = randomDrinkData.drinks[i].strDrink;
        var drinkButton = document.createElement('button');
            drinkButton.addEventListener("click",handleSaveButtonClick);
            drinkButton.setAttribute("class","save-drink-button");
            drinkButton.setAttribute("id",`${i}`);
            drinkButton.textContent = randomDrinkData.drinks[i].strDrink;
            drinkButton.className = "button is-danger";
        var instructions = randomDrinkData.drinks[i].strInstructions;
        
        var ingredientContainer = document.createElement('ul');
        var ingredientContainerTitle = document.createElement('h4');
        ingredientContainerTitle.textContent = 'Ingredients: ';
        // console.log(randomDrinkData.drinks[i]);
        
        var randomDrinkIngredients = [randomDrinkData.drinks[i].strIngredient1, randomDrinkData.drinks[i].strIngredient2, randomDrinkData.drinks[i].strIngredient3, randomDrinkData.drinks[i].strIngredient4, randomDrinkData.drinks[i].strIngredient5, randomDrinkData.drinks[i].strIngredient6, randomDrinkData.drinks[i].strIngredient7, randomDrinkData.drinks[i].strIngredient8, randomDrinkData.drinks[i].strIngredient9, randomDrinkData.drinks[i].strIngredient10, randomDrinkData.drinks[i].strIngredient11,randomDrinkData.drinks[i].strIngredient12, randomDrinkData.drinks[i].strIngredient13, randomDrinkData.drinks[i].strIngredient14, randomDrinkData.drinks[i].strIngredient15,];

        
        var instructionTitle = document.createElement('h4');
        instructionTitle.textContent = 'Instructions: ';
        var instructionsContainer = document.createElement('p');
        instructionsContainer.textContent = instructions;


        for(var j=0; j< randomDrinkIngredients.length; j++) {
          if (randomDrinkIngredients[j] !== null){
            var drinkRowData = document.createElement('li');
                drinkRowData.textContent = randomDrinkIngredients[j];
          }
                ingredientContainer.append(drinkRowData);
        }

     
        drinkContainerEl.append(drinkButton,ingredientContainerTitle, ingredientContainer, instructionTitle, instructionsContainer );
        searchedDrinks.append(drinkContainerEl);

      }
    })   
    }
    
fetchNameButton.addEventListener('click', getDrinks);
fetchRandomButton.addEventListener('click', getRandomDrink);

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
    savedDrinkContainer.append(savedDrink, deleteDrinkBtn); 
    savedDrink.append(savedDrinkLocal); 
  } else {
    console.log("item already exists in local database")
  }
} 

function handleDeleteButton(event) { 
  var localStorageKey = event.target.previousElementSibling.textContent
  localStorage.removeItem(localStorageKey);
  event.target.previousElementSibling.remove(); 
  event.target.remove(); 
}

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
renderSavedDrinks();



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