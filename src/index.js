import load from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import { base } from './pageLoad.js';
import './style.css';

base();

const content = document.getElementById('content');
content.appendChild(load());

const buttons = document.querySelectorAll('.tab');

buttons.forEach((button) => button.addEventListener('click', () => {
  buttons.forEach((button) => button.classList.remove('menu-item-selected'));

  if (button.id === 'HOME') {
    clear();
    content.appendChild(load());
    button.classList.add('menu-item-selected');
  }

  if (button.id === 'MENU') {
    clear();
    content.appendChild(menu());
    button.classList.add('menu-item-selected');
  }

  if (button.id === 'CONTACT') {
    clear();
    content.appendChild(contact());
    button.classList.add('menu-item-selected');
  }
}));

function clear() {
  const main = document.querySelector('.main');
  let child = main.lastElementChild;
  while (child) {
    main.removeChild(child);
    child = main.lastElementChild;
  }
}
