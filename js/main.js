import { addRecipe } from './module/addRecipe.js'

const qs = e => document.querySelector(e);

qs('#send-recipe-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const form = qs('#form');
    const isFormValid = form.checkValidity();
    if (isFormValid) {
        addRecipe();
    } else {
        form.reportValidity();
    };
});

