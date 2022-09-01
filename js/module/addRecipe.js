import { loadRecipe } from './loadRecipe.js';

export const recipes = [];

const qs = e => document.querySelector(e);

const clearTextArea = () => {
    qs('.nicEdit-main').innerHTML = '';
};

export const addRecipe = () => {

    let recipe = {
        title: qs('#recipe-title').value,
        image: qs('#recipe-image').value,
        cookTime: qs('#cook-time').value,
        ingredients: qs('#ingredients-number').value,
        servings: qs('#recipe-servings').value,
        description: qs('.nicEdit-main').innerHTML
    };

    recipes.push(recipe);
    console.log(recipes)
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
        };

        loadRecipe();
    };
    loadRecipe();
};