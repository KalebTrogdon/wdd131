import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipe = recipes[0];

    const recipeSection = document.getElementById('recipes');

    const article = document.createElement('article');
    article.classList.add('recipe');

    article.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" />
    <h2>${recipe.name}</h2>
    <p class="description">${recipe.description}</p>
    <p class="info">
      <span class="prep">Prep Time: ${recipe.prepTime}</span> |
      <span class="cook">Cook Time: ${recipe.cookTime}</span>
    </p>
    <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
      ${generateStars(recipe.rating)}
    </div>
    <button class="view-recipe">View Recipe</button>
  `;

    recipeSection.innerHTML = '';
    recipeSection.appendChild(article);
});

function generateStars(rating) {
    const fullStar = '<span aria-hidden="true" class="icon-star">⭐</span>';
    const emptyStar = '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    let starsHTML = '';

    for (let i = 0; i < Math.floor(rating); i++) {
        starsHTML += fullStar;
    }

    if (rating % 1 >= 0.5) {
        starsHTML += fullStar;
    }

    const totalStars = 5;
    const currentStars = starsHTML.split('⭐').length - 1;
    for (let i = currentStars; i < totalStars; i++) {
        starsHTML += emptyStar;
    }

    return starsHTML;
}

