var drinkInputEl = document.querySelector('#drink-input');
var searchedDrinkContainerEL = document.querySelector('#drink-container');


//Todo
https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a
//
//function to run fetch for Drinks
    // Event Listener
    // organize Fetched data
    // place fetched data into a element with a button


//Drink container function
function drinkSubmitContainer (event) {
  event.preventDefault();

  var drinkInput = drinkInputEl.value.trim();

  if (drinkInput) {
    getSearchedDrink(drinkInput);

    drinkContainerEl.textContent = '';
    drinkInputEl.value = '';
  } else {
    alert('Please enter a drink name');// we can not use an alert need a model
  }
};


//Function for handling the button 
function getSearchedDrink (drink) {
  var drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

  fetch(drinkUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayDrink(data, drink);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      //alert('Unable to connect to thecocktaildb.com');// no alert
    });
};

//Function for Getting the Drink list

  fetch(drinkUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayDrink(data.items, );
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  });


function displayDrink (drink, searchTerm) {
  if (repos.length === 0) {
    drinkContainerEl.textContent = 'No drink found.';
    return;
  }
  };