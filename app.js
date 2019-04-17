$(() => {

  // HEADER SLIDESHOW:

let currentImgIndex = 0;
let numOfImages = $('.slides').children().length - 1;
let $currentImage = $('.slides').children();

const slideshow = () => {
  $currentImage.eq(currentImgIndex).hide();
  if (currentImgIndex < numOfImages) {
    currentImgIndex++;
  } else {
    currentImgIndex = 0;
  }
  $currentImage.eq(currentImgIndex).show();

    setTimeout(slideshow, 3000);
}

slideshow();

  // GLOBAL VARIABLES FOR API:

  const app_id = 'e05a27a5';
  const app_key = '22ed78487597ae7e8beac2e39fc678e9';
  const url = 'https://api.edamam.com/search?';

  const $modal = $('.modal');



  // RECIPE SEARCH AND API CALL:

  $('form').on('submit', (event) => {
    $('.container').empty();
    event.preventDefault();


      // Input Value: Food user wants to search for:
    const inputValue = $('input[type="text"]').val()
      if (inputValue === '') {
        $('.container').html('<h3>Please enter a food item!</h3>');
      }
    const veganCheck = $('#veganCheck').is(':checked');
    const vegetarianCheck = $('#vegetarianCheck').is(':checked');
    const glutenCheck = $('#glutenCheck').is(':checked');

    let requestUrl = url + 'q=' + inputValue + '&app_id=' + app_id + '&app_key=' + app_key;
      if (veganCheck === true) {
        requestUrl = requestUrl + '&health=vegan';
      } else if (vegetarianCheck === true){
        requestUrl = requestUrl + '&health=vegetarian';
      } else if (glutenCheck === true) {
        requestUrl = requestUrl + '&health=gluten-free';
      } else {
        requestUrl = url + 'q=' + inputValue + '&app_id=' + app_id + '&app_key=' + app_key;
      };

    $.ajax({
      url: requestUrl,
      dataType: "jsonp",
      success: function(data) {

        for (let i = 0; i < 20; i++) {

          const label = data.hits[i].recipe.label;
          const recipeUrl = data.hits[i].recipe.url;
          const recipeImg = data.hits[i].recipe.image;
          const ingredients = data.hits[i].recipe.ingredientLines;
          const calories = data.hits[i].recipe.calories;
          const fat = data.hits[i].recipe.totalDaily.FAT.quantity;
          const carbs = data.hits[i].recipe.totalDaily.CHOCDF.quantity;
          const serves = data.hits[i].recipe.yield;

          const totalCals = Math.floor(calories/serves);
          const totalFat = Math.floor(fat/serves);
          const totalCarbs = Math.floor(carbs/serves);

          console.log(totalCals);

          // Building Divs for each recipe returned:

            const $recipeContainer = $('<div>').addClass('recipe-box')
            $('.container').append($recipeContainer);
            const $recipePic = $('<img>').addClass('recipe-img');
            $recipePic.attr('src', recipeImg);
            $recipeContainer.append($recipePic)
            const $recipes = $('<a>').addClass('recipe-name').attr('href', recipeUrl);
            $recipes.text(label)
            $recipeContainer.append($recipes);

            const listNutrition = () => {
              const $nutrition = $('<p>').text(`This recipe has ${totalCals} total calories, ${totalFat} total fat, and ${totalCarbs} total carbohydrates per serving.`)
              $('recipe-box').append($nutrition);
            }

            $('.recipe-box').on('click', listNutrition);

        }
      }
    })
  });



  const openModal = () => {
    $modal.css('display', 'block');
    const $recipeList = $('<div>').addClass('ingredient-list');
    $recipeList.text(ingredients);
    $('.modal').append($recipeList);
  }

  $('.recipe-box').on('click', openModal)












});
