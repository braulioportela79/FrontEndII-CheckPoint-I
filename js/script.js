let recipes = [];

const addRecipe = e => {

  let recipe = {
    id: new Date(),
    title: document.getElementById('recipe-title').value,
    image: document.getElementById('recipe-image').value,
    cookTime: document.getElementById('cook-time').value,
    ingredients: document.getElementById('ingredients-number').value,
    servings: document.getElementById('recipe-servings').value,
    description: document.querySelector('.nicEdit-main').innerHTML
  };



  const form = document.getElementById('form');

  const isFormValid = form.checkValidity();

  if (!isFormValid) {
    form.reportValidity();
  } else {

    recipes.push(recipe);

    form.checkValidity();
    form.reset();

    e.preventDefault();

    clearTextArea();

    const footer = document.querySelector('footer');
    const recipeContainer = document.querySelector('.recipes-container');
    const card = document.createElement('div');

    recipeContainer.appendChild(card);
    card.classList.add('recipe');

    if (recipes.length > 0) {
      footer.style.position = 'relative';
      recipeContainer.style.padding = '100px 20px';
    }

    recipes.forEach(e => {

      let recipeIndex = e.id;
      let recipeTitle = e.title;
      let recipeImage = e.image;
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
      
      </div>
      <div class="recipe-footer">
      <button id="deleteBtn">Remover Receita</button>
      </div>
      `
    })
    // const deleteBtn = document.querySelectorAll('#deleteBtn');

    // deleteBtn.forEach(btn => {
    //   btn.addEventListener('click', () => {

    //     let index = recipes.indexOf(recipe.id)

    //     console.log(index)
    //     // console.log(recipe.id)
    //     // console.log(recipes.indexOf(index, 1))


    //     // console.log(recipes.splice(index, 1))

    //     // console.log(index)
    //     // console.log(e)
    //     // console.log(index)
    //     // console.log(btn)
    //   })

    //   // render()
    // });

    // function deleteRecipe(id) {
    //   let index = recipes.findIndex(e => e.id == id);
    //   recipes.splice(index, 1);
    //   render();
    // }

    const imgURL = document.querySelectorAll('.recipe-img img');

    imgURL.forEach(el => {
      var url = el.getAttribute('src');
      const http = new XMLHttpRequest();
      http.open('GET', url);
      http.onerror = (e) => {
        if (e.type === 'error') {
          el.setAttribute('src', './image/default-recipe-img.jpg')
        }
      };
      http.send();
    });
  };
}

let clearTextArea = () => {
  document.querySelector('.nicEdit-main').innerHTML = '';
};

document.getElementById('send-recipe-btn').addEventListener('click', addRecipe);