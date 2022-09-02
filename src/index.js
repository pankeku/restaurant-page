import load from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import {base} from './pageLoad.js';
import './style.css';

base();

let content = document.getElementById('content');
content.appendChild(load());

let buttons = document.querySelectorAll('.tab');



buttons.forEach(button => button.addEventListener('click', () => {

   

    if (button.id === "HOME") {
        clear();
        content.appendChild(load());
    }

    if (button.id === "MENU") {
        clear();
        content.appendChild(menu());
    }

    if (button.id === "CONTACT") {
        clear();
        content.appendChild(contact());
        
    }
}))

function clear() {
    const main = document.querySelector('.main');
    let child = main.lastElementChild;
    while (child) {
        main.removeChild(child);
        child = main.lastElementChild;
    }
    
}