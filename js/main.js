import { addRecipe } from './module/addRecipe.js'

const qs = e => document.querySelector(e);

qs('#send-recipe-btn').addEventListener('click', addRecipe);