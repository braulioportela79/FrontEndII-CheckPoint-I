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
  // console.log(imgURL.currentSrc)



  // const imgURL = document.querySelector('.recipe-img img');
  // console.log(imgURL.getAttribute('src'));
  // console.log(imgURL)
  // imgURL.forEach(e => {
  // if(e.currentSrc == '') {
  //   console.log('nao tem nada')
  // }
  //   console.log(e.currentSrc)
  // })


  recipes.forEach(e => {

    let recipeTitle = e.title
    let recipeImage = e.image
    let cookTime = e.cookTime;
    let ingredients = e.ingredients;
    let servings = e.servings;
    let description = e.description;

    // console.log(recipeImage)
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
  const imgURL = document.querySelectorAll('.recipe-img img');
  imgURL.forEach(e => {

window.location

    var url = e.getAttribute('src');
    var http = new XMLHttpRequest();
console.log(url)
http.open('HEAD', url, false)
http.send()
console.log(http);
    
    // console.log(http.open())
    // console.log(http.onerror)
    // console.log(http.responseText)
    if (http.status === 404) {
      e.setAttribute('src', './image/default-recipe-img.jpg');
    } else if (e.getAttribute('src') == '' ) {
      e.setAttribute('src', './image/default-recipe-img.jpg')
    };
    
    
  })

};

function clearTextArea() {
  document.querySelector('.nicEdit-main').innerHTML = '';

}

document.getElementById('send-recipe-btn').addEventListener('click', addRecipe);