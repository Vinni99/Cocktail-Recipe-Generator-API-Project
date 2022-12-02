var drinkInputEl = document.querySelector('#drink-input');


//Todo

//
//function to run fetch for Drinks
    // Event Listener
    // organize Fetched data
    // place fetched data into a element with a button
function drinkSubmitContainer (event) {
  event.preventDefault();

  var drinkInput = drinkInputEl.value.trim();

  if (drinkInput) {
    getUserRepos(drinkInput);

    repoContainerEl.textContent = '';
    drinkInputEl.value = '';
  } else {
    alert('Please enter a drink name');
  }
};
