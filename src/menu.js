import './style.css';
import { menu as meals } from './config.js';
import {main } from './pageLoad';
import createElementWithClass from './util.js';

function loadMenuPage() {
  let menu = generateMenuPage();
  main.append(menu);

  return main;
}

function generateMenuPage() {
  const container = document.createElement('div');
  container.classList.add('menu-container');

  const title = createElementWithClass('menu-title');
  title.textContent = meals.title;

  container.appendChild(title);

  generateItems(container);

  return container;
}

function generateItems(menuContainer) {
  const categories = createElementWithClass('categories');
  for (const mealCategory of Object.keys(meals).filter(c => c !== 'title')) {
  
    const category = createElementWithClass('category');
    const categoryTitle = createElementWithClass('category-title');
    categoryTitle.classList.add('title--underline');

    categoryTitle.textContent = mealCategory;

    const mealList = createElementWithClass('meals-list');

    for (const categoryItem of meals[mealCategory]) {
      const title = createElementWithClass('meal-title');
      const ingredients = createElementWithClass('meal-ingredients');
      const price = createElementWithClass('meal-price');

      const meal = createElementWithClass('meal');

      title.textContent = categoryItem.name;
      ingredients.textContent = categoryItem.ingredients;
      price.textContent = categoryItem.price;

      meal.append(title, ingredients, price);
      mealList.append(meal);
    }

    categories.appendChild(category);
    category.append(categoryTitle, mealList);

    menuContainer.appendChild(categories);
  }
}

export default loadMenuPage;
