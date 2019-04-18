# CasaKitchen App
Recipe App for GA Unit 1 Project

## Description

CasaKitchen is a recipe search application that allows you to search for various recipes using food that you may already have at home. A user can also search by specific foods, such as lasagne, or cuisines, such as Italian or Mexican. A user has the option to toggle a deietary restriction for gluten-free, vegetarian, and vegan. Once recipes are populated, a user can easily view the nutrition facts by hovering over the image. Also, a user has the ability to click on the image to view the full recipe ingredients without leaving the CasaKitchen app. This allows the user to browse as many recipes as they want in one location without having to jump from page to page to get the information needed to chose their next meal. 

## Technologies Used

CasaKitchen App was built using HTML, CSS, Javascript and jQuery to manipulate the DOM. The app uses AJAX to make a request to the Edamam API. 

## Using the CasaKitchen App

Upon arrival to the CasaKitchen app, a user is shown a simple header with the app logo, a slideshow of cooking photos, a search bar, and simple advice to the user to search using ingredients they have on hand. A user has the option to narrow their search by dietary restrictions shown under the search bar. Once a user puts in a food item, several recipes using the ingredients searched for will populate. Under each image is a link to the external recipe page, which will open in a new window. If the user wishes to view the nutrition facts, they can simply hover over the image. Under the nutrition facts they will see a button instructing them to click to view the full ingredients list. If clicked, a modal will appear listing all ingredients necessary to make the recipe. A user does not need to refresh the page or click a reset button to search for additional items. Also, if there are no recipes found using their ingredients list, they will see a message that no recipes are available. 

## Unsolved Problems

On occassion, the API will return an error message when searching for a basic ingredient item, such as chicken. 
I also attempted to implement an infinite scroll, but was unable to get it to work for my site. 
