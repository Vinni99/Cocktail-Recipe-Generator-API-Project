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
var buttonClickHandler = function buttonClick (event) {
  
  var language = event.target.getAttribute('data-language');

  // Why is this `if` block in place?
  // TODO: if there is no language attached to the button, do not attempt to fetch repos.
  if (language) {
    getFeaturedRepos(language);

    repoContainerEl.textContent = '';
  }
};
