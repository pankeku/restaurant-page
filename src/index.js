import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';
import { content, loadBase, main } from './pageLoad.js';
import './style.css';

let activePage = 'HOME';

let buttons;

const init = (function () {
  loadBase();
  display(loadHomePage);

  buttons = document.querySelectorAll('.tab');

  const homeButton = document.getElementById('HOME');
  changeButtonsDisplay(homeButton);
})();

function display(loadPage) {
  clear();
  content.appendChild(loadPage());
}

function changeButtonsDisplay(button) {
  buttons.forEach((button) => button.classList.remove('menu-item-selected'));
  button.classList.add('menu-item-selected');
}


let tabs = document.querySelector('.tabs');
tabs.addEventListener('click', (e) => {
  let button = e.target;

  if (button.id === activePage) return;

  if (button.id === 'HOME') {
    display(loadHomePage);
    changeButtonsDisplay(button);
  }

  if (button.id === 'MENU') {
    display(loadMenuPage);
    changeButtonsDisplay(button);
  }

  if (button.id === 'CONTACT') {
    display(loadContactPage);
    changeButtonsDisplay(button);
  }

  

  activePage = button.id;
});

function clear() {
  const main = document.querySelector('.main');
  main.replaceChildren();
}
