import recipes from './recipes.mjs';

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="${recipe.name}" />
    <figcaption>
      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}
      </ul>
      <h2><a href="#">${recipe.name}</a></h2>
      <p class="recipe__ratings">
        ${ratingTemplate(recipe.rating)}
      </p>
      <p class="recipe__description">
        ${recipe.description}
      </p>
    </figcaption>
  </figure>`;
}

function renderRecipes(recipeList) {
  const outputElement = document.getElementById('recipes');
  const html = recipeList.map(recipe => recipeTemplate(recipe)).join('');
  outputElement.innerHTML = html;
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

function filterRecipes(query) {
  query = query.toLowerCase();
  const filtered = recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(query);
    const descriptionMatch = recipe.description.toLowerCase().includes(query);
    const tagMatch = recipe.tags.some(tag => tag.toLowerCase().includes(query));
    const ingredientMatch = recipe.recipeIngredient.some(ing => ing.toLowerCase().includes(query));
    return nameMatch || descriptionMatch || tagMatch || ingredientMatch;
  });
  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  const searchInput = document.getElementById('search');
  const query = searchInput.value.trim();
  
  if (query === '') {
    init();
  } else {
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', searchHandler);
});
