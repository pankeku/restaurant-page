import './style.css';
import {home} from './config.js';


const element = document.createElement('div');
element.classList.add('element');

const main = document.createElement('div');
main.classList.add('main');

function base() {
  generateMapsScript();
  generateHeader();
  element.appendChild(main);
  
}

function generateMapsScript() {
  if (document.getElementById('maps-script') === null) {
    let script = document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=&v=weekly';
    script.setAttribute('async', '');
    script.setAttribute('defer', '');
    script.id = 'maps-script';
    document.getElementsByTagName('body')[0].appendChild(script);
  }
}

function generateHeader() {
  const container = createElementAndClass('container');

  element.appendChild(container);

  const header = createElementAndClass('header');

  header.textContent = home.header;

  container.appendChild(header);

  const tabs = createElementAndClass('tabs');

  generateTabs(tabs);

  container.appendChild(tabs);
}

function generateTabs(parent) {
  for (let value of home.tabs) {
    let tab = createElementAndClass('tab');
    tab.id = value;
    tab.textContent = value;

    parent.appendChild(tab);
  }
}

function createElementAndClass(className) {
  let foo = document.createElement('div');
  foo.classList.add(className);

  return foo;
}

export { base, main, element };
