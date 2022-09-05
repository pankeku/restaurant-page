import './style.css';
import { menu as meals } from './config.js';
import { element, main } from './pageLoad';
import createElementAndClass from './util.js';

function menu() {
  const container = document.createElement('div');
  container.classList.add('menu-container');
  main.appendChild(container);

  const title = createElementAndClass('menu-title');
  title.textContent = meals.title;

  container.appendChild(title);

  generateItems();

  return element;
}

function generateItems() {
  const categories = createElementAndClass('categories');
  for (const categoryName of Object.keys(meals)) {
    if (categoryName === 'title') {
      continue;
    }
    const category = createElementAndClass('category');
    const categoryTitle = createElementAndClass('category-title');
    categoryTitle.classList.add('title--underline');

    categoryTitle.textContent = categoryName;

    const mealList = createElementAndClass('meals-list');

    for (const categoryItem of meals[categoryName]) {
      const title = createElementAndClass('meal-title');
      const ingredients = createElementAndClass('meal-ingredients');
      const price = createElementAndClass('meal-price');

      const meal = createElementAndClass('meal');

      title.textContent = categoryItem.name;
      ingredients.textContent = categoryItem.ingredients;
      price.textContent = categoryItem.price;

      meal.append(title, ingredients, price);
      mealList.append(meal);
    }

    categories.appendChild(category);
    category.append(categoryTitle, mealList);

    document.querySelector('.menu-container').appendChild(categories);
  }
}

export default menu;
