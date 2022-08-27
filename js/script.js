let recipes = [];

const addRecipe = e => {
    e.preventDefault();
    let recipe = {
        title: document.getElementById('recipe-title').value,
        image: document.getElementById('recipe-image').value,
        cookTime: document.getElementById('cook-time').value,
        ingredients: document.getElementById('ingredients-number').value,
        servings: document.getElementById('recipe-servings').value,
        description: document.querySelector('.nicEdit-main').innerHTML
    };

    recipes.push(recipe);

    document.querySelector('form').reset();
    
    const recipeContainer = document.querySelector('.recipes-container');
    const card = document.createElement('div');
    recipeContainer.appendChild(card);
    card.classList.add('recipe');

    recipes.forEach(e => {

        let recipeTitle = e.title
        let recipeImage = e.image
        let cookTime = e.cookTime;
        let ingredients = e.ingredients;
        let servings = e.servings;
        let description = e.description;

        card.innerHTML = `
        <div class="recipe-img">
        <img src="${recipeImage}" alt="" />
      </div>
  <div class="recipe-content">
    <div class="content-header">
      <div class="row-wrapper">
        <h2 class="recipe-title">${recipeTitle}</h2>
      </div>
      <ul class="recipe-details">
        <li class="recipe-details-item time">
          <ion-icon name="time-outline"></ion-icon>
          <span class="values">${cookTime}</span>
          <span class="title">Minutos</span>
        </li>
        <li class="recipe-details-item ingredients">
          <ion-icon name="book-outline"></ion-icon>
          <span class="values">${ingredients}</span>
          <span class="title">Ingredientes</span>
        </li>
        <li class="recipe-details-item servings">
          <ion-icon name="person-outline"></ion-icon>
          <span class="values">${servings}</span>
          <span class="title">Porções</span>
        </li>
      </ul>
    </div>
    <p class="recipe-description">${description}</p>
    <div class="recipe-footer">
      <a href="">Ver Receita</a>
    </div>
  </div>
    `
    })
};

document.getElementById('send-recipe-btn').addEventListener('click', addRecipe);