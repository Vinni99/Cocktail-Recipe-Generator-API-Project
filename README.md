# Bottoms Up: Drink Generator-project

## Description

This project was the creation of a webpage that utilized API application to search and render data and then store it in local storage and render it again on a separate section of the page. The data collected for this specific API was a drink recipe API located at https://www.thecocktaildb.com/api.php The webpage allows for the user to search a specific drink and then see its ingredients and instructions. The user may also select the random drink button, and have a random drink created for them. The final aspect of the webpage is for the user to save drinks in the local storage and create a list of drinks to try, keeping them or deleting them as needed (Link ot live page).

The project utilized such technologies as the before mentioned API, as well as JQuery, CSS-Frameworks, septically Bulma.io, as well as the general HTML, CSS, and JS code.

The project held several challenges, specifically with the rendering of the API data. The data retrieved from the API was delivered in differing formats. Ingredients were all rendered in separate stings, wile instructions were rendered as one string. Rendering the data and separating it into the desired locations on the HTML, and ignoring any Null data was a challenge for the team. This challenge was repeated when attempting to save the data again in our local storage.

A second challenge for the team was utilizing GitHub projects for the first time. Working as a team on one project was highly difficult and a large amount of our time was dedicated to problem solving branch and pull issues. this challenge however was overcome and the team became far more capable and confident in the use of GitHub.

## User Story

As a User,

I want to be able to search for drinks by name and see their ingredients,

Or, get a random drink and see it's ingredients,

so that I can locate and save drinks that I want to try making.

## Acceptance Criteria

GIVEN I am using using a Drink Recipe app to find Drinks.
WHEN I enter a name and click the search button
THEN a list of drinks and its ingredients and Measurements on how to make it will be displayed.
Then a list of drinks and its ingredients and Measurements on how to make it will be displayed.
WHEN I click on the random drink button
THEN I am presented with a random drink and its ingredients and Measurements on how to make it will be displayed.
WHEN I select a specific drink
THEN it is added to my drink list.
WHEN I click the done button on that drink
THEN it is removed from my list
WHEN I close or Refresh my page
THEN the drinks I have chosen are saved to the local storage and the page and are listed in my Saved Drink Section.

## Installation

No Installation Steps

## Usage

This project can be initiated by entering in a drink name or even a letter" into the search field and selecting the find drink button. The user can also select the random drink button for pulling a random drink from the array. 
![Alt text](add images of the webpage)

## Credits

HTML, CSS, and JS crated by Vinícius Teixeira, William Massie, and James Baxley.
CSS framework provided by Bluma.io
API provided by The Cocktail DB https://www.thecocktaildb.com/api.php
Javascript Library features provided by JQuery https://jqueryui.com/

## License

N/A