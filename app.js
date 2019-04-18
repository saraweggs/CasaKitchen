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



  // RECIPE SEARCH AND API CALL:

  $('form').on('submit', (event) => {
    $('.container').empty();
    event.preventDefault();


      // Input Value: Food user wants to search for:
    const inputValue = $('input[type="text"]').val()
      if (inputValue === '') {
        $('.container').html('<h3>Please enter a food item!</h3>');
      }

      // Check boxes for diet restrictions:
    const veganCheck = $('#veganCheck').is(':checked');
    const vegetarianCheck = $('#vegetarianCheck').is(':checked');
    const glutenCheck = $('#glutenCheck').is(':checked');

      // Updates API URL based on if a diet restriction is checked:
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
    }).then(
      (data) => {


        for (let i = 0; i < 20; i++) {

          // Variables for each result pulled from API:
          const label = data.hits[i].recipe.label;
          const recipeUrl = data.hits[i].recipe.url;
          const recipeImg = data.hits[i].recipe.image;
          const ingredients = data.hits[i].recipe.ingredientLines;
          const calories = data.hits[i].recipe.calories;
          const fat = data.hits[i].recipe.totalDaily.FAT.quantity;
          const carbs = data.hits[i].recipe.totalDaily.CHOCDF.quantity;
          const serves = data.hits[i].recipe.yield;

          // Divides the nutrition facts by the serving size and rounds to whole number:
          const totalCals = Math.floor(calories/serves);
          const totalFat = Math.floor(fat/serves);
          const totalCarbs = Math.floor(carbs/serves);
          const nutrition = 'This recipe has ' + totalCals + ' total calories, ' + totalFat + ' grams of fat, and ' + totalCarbs +  ' grams of carbohydrates per serving. Click to view the full ingredient list!';

          // Building Divs for each recipe returned:

            const $recipeContainer = $('<div>').addClass('recipe-box')
            $('.container').append($recipeContainer);
            // Builds image div & gives it an on click method to pull ingredients in modal:
            const $recipePic = $('<img>').addClass('recipe-img').on('click', () => {
              $('#modal-header').empty();
              $('.recipe-img').css('z-index', 0);
              $('.nutrition').css('z-index', -1);
              $('<p>').text(ingredients).addClass('modal-ingredients').appendTo('#modal-header');
              $('#modal').css('display', 'block');
            });
            $recipePic.attr('src', recipeImg);
            $recipeContainer.append($recipePic)
            const $nutritionFacts = $('<div>').addClass('nutrition');
            $nutritionFacts.text(nutrition);
            $recipeContainer.append($nutritionFacts);
            const $recipes = $('<a>').addClass('recipe-name').attr('href', recipeUrl);
            $recipes.text(label)
            $recipeContainer.append($recipes);

            // Close Modal: 
            $('#close').on('click', () => {
              $('#modal').css('display', 'none');
              $('.nutrition').css('z-index', 0);
              $('.recipe-img').css('z-index', 1);
            });


            // Opens recipe site in a new tab:
            $('.recipe-name').on('click', (event) => {
              event.preventDefault();
              window.open(recipeUrl, '_blank');
            })

}


      // Function to hover over image to show nutrition facts:
      const showNutrition = (event) => {
          $(event.currentTarget).css('z-index', 1);
        }
      // Function to hide nutrition facts when not hovered over image:
      const hideNutrition = () => {
          $('.nutrition').css('z-index', 0);
        }
      // Hover method to call show and hide nutrition functions:
      $('.recipe-img').hover(showNutrition, hideNutrition);


    },
    () => {
      // Error message if nothing is pulled from API:
      $('.container').html('<h3>Sorry! No recipes were found!</h3>');
    }
  )


  });





});
