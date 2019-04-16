$(() => {

  // GLOBAL VARIABLES FOR API:

  const app_id = 'e05a27a5';
  const app_key = '22ed78487597ae7e8beac2e39fc678e9';
  const url = 'https://api.edamam.com/search?'

  // RECIPE SEARCH AND API CALL:

  $('form').on('submit', (event) => {
    event.preventDefault();
      // Input Value: Food user wants to search for:
    const inputValue = $('input[type="text"]').val()

    const requestUrl = url + 'q=' + inputValue + '&app_id=' + app_id + '&app_key=' + app_key + '&from=0&to=100';

    $.ajax({
      url: requestUrl,
      dataType: "jsonp",
      success: function(data) {

        for (let i = 0; i < 99; i++) {
          const recipeData = data.hits[i].recipe;
          console.log(data.hits[i].recipe.label);

          const label = data.hits[i].recipe.label;
          const recipeUrl = data.hits[i].recipe.url;
          const recipeImg = data.hits[i].recipe.image;
          const ingredients = data.hits[i].recipe.ingredientLines;

          // Building Divs for each recipe returned:

            const $recipeContainer = $('<div>').addClass('recipe-box')
            $('.container').append($recipeContainer);
            const $recipePic = $('<img>').addClass('recipe-img');
            $recipePic.attr('src', recipeImg);
            $recipeContainer.append($recipePic)
            const $recipes = $('<a>').addClass('recipe-name').attr('href', recipeUrl);
            $recipes.text(label)
            $recipeContainer.append($recipes);

        }
      }
    })
  });

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




});
