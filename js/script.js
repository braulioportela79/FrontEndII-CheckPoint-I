let recipes = [];

const qs = e => document.querySelector(e);
const qsa = e => document.querySelectorAll(e);

let clearTextArea = () => {
  qs('.nicEdit-main').innerHTML = '';
};

const addRecipe = e => {

  e.preventDefault();

  let recipe = {
    title: qs('#recipe-title').value,
    image: qs('#recipe-image').value,
    cookTime: qs('#cook-time').value,
    ingredients: qs('#ingredients-number').value,
    servings: qs('#recipe-servings').value,
    description: qs('.nicEdit-main').innerHTML
  };

  recipes.push(recipe);

  const form = qs('#form');
  const isFormValid = form.checkValidity();
  if (!isFormValid) {
    form.reportValidity();
  } else {
    form.checkValidity();
    form.reset();
    clearTextArea();
    const footer = qs('footer');
    const recipeContainer = qs('.recipes-container');
    const card = document.createElement('div');

    recipeContainer.appendChild(card);
    card.classList.add('recipe');

    if (recipes.length > 0) {
      footer.style.position = 'relative';
      recipeContainer.style.padding = '100px 20px';
    }

    loadRecipe();
  };
};

qs('#send-recipe-btn').addEventListener('click', addRecipe);

let loadRecipe = () => {

  let recipesContainer = qs('.recipes-container');
  recipesContainer.innerHTML = '';

  recipes.forEach(e => {

    let recipeTitle = e.title;
    let recipeImage = e.image;
    let cookTime = e.cookTime;
    let ingredients = e.ingredients;
    let servings = e.servings;
    let description = e.description;

    let recipeCard = `
    <div class="recipe">
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
      </div>
      <div class="recipe-footer">
      <button id="deleteBtn">Remover Receita</button>
      </div>
      </div>
      `
    recipesContainer.innerHTML += recipeCard;

    const imgURL = qsa('.recipe-img img');

    imgURL.forEach(el => {
      var url = el.getAttribute('src');
      const http = new XMLHttpRequest();
      http.open('GET', url);
      http.onerror = (e) => {
        if (e.type === 'error' || http.status == 404) {
          el.setAttribute('src', './image/default-recipe-img.jpg')
        }
      };
      http.send();
    });
  });

  const deleteBtn = qsa('#deleteBtn');
  deleteBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      recipes.splice(i, 1);
      loadRecipe();
    });
  });
};
