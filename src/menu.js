import './style.css';
import { home, menu as meals } from './config.js';
import { base, element, main } from './pageLoad';
import createElementAndClass from './util.js';

function menu() {
  const container = document.createElement('div');
  container.classList.add('menu-container');
  main.appendChild(container);

  const wrapper = createElementAndClass('menu-wrapper');

  const title = createElementAndClass('menu-title');
  title.textContent = meals.title;

  const list = createElementAndClass('menu-list');

  wrapper.appendChild(title);
  container.appendChild(wrapper);

  generator();

  return element;
}

function generator() {
  let categories = createElementAndClass('categories');
  for (let categoryName of Object.keys(meals)) {
    if (categoryName === 'title') {
      continue;
    }
    let category = createElementAndClass('category');
    let categoryTitle = createElementAndClass('category-title');
    categoryTitle.classList.add('title--underline');

    categoryTitle.textContent = categoryName;

    let mealList = createElementAndClass('meals-list');

    for (let categoryItem of meals[categoryName]) {
      let title = createElementAndClass('meal-title');
      let ingredients = createElementAndClass('meal-ingredients');
      let price = createElementAndClass('meal-price');

      let meal = createElementAndClass('meal');
      

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

  function generateCategory(title) {}
}

export default menu;
