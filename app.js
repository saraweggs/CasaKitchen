$(() => {

  // GLOBAL VARIABLES FOR API:

  const app_id = 'e05a27a5';
  const app_key = '22ed78487597ae7e8beac2e39fc678e9';
  const url = 'https://api.edamam.com/search?'

  // RECIPE SEARCH AND API CALL:

  $('form').on('submit', (event) => {
    event.preventDefault();
      // Input Value: Food nuser wants to search for:
    const inputValue = $('input[type="text"]').val()

    const requestUrl = url + 'q=' + inputValue + '&app_id=' + app_id + '&app_key=' + app_key + '&from=0&to=10';

    $.ajax({
      url: requestUrl,
      dataType: "jsonp",
      success: function(data) {

        for (let i = 0; i < 10; i++) {
          const recipeData = data.hits[i].recipe;
          console.log(data.hits[i].recipe.label);

          const label = data.hits[i].recipe.label;
          const recipeUrl = data.hits[i].recipe.url;
          const recipeImg = data.hits[i].recipe.image;
          const ingredients = data.hits[i].recipe.ingredientLines;

          // Building Divs for each recipe returned:

            const $recipeContainer = $('<div>').addClass('container')
            $('.list').append($recipeContainer);
            const $recipePic = $('<img>')
            $recipePic.attr('src', recipeImg);
            $recipeContainer.append($recipePic)
            const $recipes = $('<div>').addClass('recipe-box')
            $recipes.text(label)
            $recipeContainer.append($recipes);



        }
      }
    })
  });

  // DISPLAYING THE RESULTS:




});
