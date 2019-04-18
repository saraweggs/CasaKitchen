# CasaKitchen App
Recipe App for GA Unit 1 Project


## Description

CasaKitchen is a recipe search application that allows you to search for various recipes using food that you may already have at home. A user can also search by specific foods, such as lasagne, or cuisines, such as Italian or Mexican. A user has the option to toggle a deietary restriction for gluten-free, vegetarian, and vegan. Once recipes are populated, a user can easily view the nutrition facts by hovering over the image. Also, a user has the ability to click on the image to view the full recipe ingredients without leaving the CasaKitchen app. This allows the user to browse as many recipes as they want in one location without having to jump from page to page to get the information needed to chose their next meal. 

## Technologies Used

CasaKitchen App was built using HTML, CSS, Javascript and jQuery to manipulate the DOM. The app uses AJAX to make a request to the Edamam API. I also used Animista for some CSS animations.

## Approach Taken

My first step in creating CasaKitchen was to research different recipe APIs to use. I received access to both the Edamam API and Yummly API. After reading the documentation on both, I found that Edamam had the data I was looking for. My next step was to plan out each day with tasks to ensure I stayed on track to complete the project. I also sketched a wireframe for the app using FrameBox.org. Before tackling the over all design or any HTML and CSS, I connected to the API and made some AJAX calls. I filtered through the data to determine what I would need. I then assigned each piece of data to a variable. I also separated the App ID, App Key, and API URL. Next I used jQuery to start building the HTML. 

I used each day to focus on a new big task. One day I focused on adding the nutrition information on hover along with some CSS updates. Another day I accomplished the modal pulling the ingredients needed for reach recipe. Throughout each day I updated or added CSS that I thought would be useful or make the app more appealing. 

I used CSS-Tricks, Animista, GoogleFonts, w3schools, and stackoverflow to assist in building my app. CSS-tricks was extremely helpful. Stackoverflow helped me work through errors I encountered during the process. 

## Using the CasaKitchen App

Upon arrival to the CasaKitchen app, a user is shown a simple header with the app logo, a slideshow of cooking photos, a search bar, and simple advice to the user to search using ingredients they have on hand. A user has the option to narrow their search by dietary restrictions shown under the search bar. Once a user puts in a food item, several recipes using the ingredients searched for will populate. Under each image is a link to the external recipe page, which will open in a new window. If the user wishes to view the nutrition facts, they can simply hover over the image. Under the nutrition facts they will see a button instructing them to click to view the full ingredients list. If clicked, a modal will appear listing all ingredients necessary to make the recipe. A user does not need to refresh the page or click a reset button to search for additional items. Also, if there are no recipes found using their ingredients list, they will see a message that no recipes are available. 

## Unsolved Problems

There is an issue with searching for Gluten-Free recipes. I went to the API site and I was able to search gluten free, but they weren't filtering through my data. I would receive Error 403. 
I also attempted to implement an infinite scroll, but was unable to get it to work for my site. 
