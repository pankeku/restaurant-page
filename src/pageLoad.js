import './style.css';
import {home} from './config.js';
import createElementWithClass from './util';

const content = document.getElementById('content');
const main = createElementWithClass('main');

function loadBase() {
  generateMapsScript();
  
  content.append(generateHeader());
  content.appendChild(main);
}

function generateMapsScript() {
  if (document.getElementById('maps-script') === null) {
    let script = document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAu0LrpUQuTFqssEcczRHPqUK3196a96aY&callback=&v=weekly';
    script.setAttribute('async', '');
    script.setAttribute('defer', '');
    script.id = 'maps-script';
    document.getElementsByTagName('body')[0].appendChild(script);
  }
}

function generateHeader() {
  const container = createElementWithClass('container');


  const header = createElementWithClass('header');

  header.textContent = home.header;

  container.appendChild(header);

  const tabs = createElementWithClass('tabs');

  generateTabs(tabs);

  container.appendChild(tabs);

  return container;
}

function generateTabs(parent) {
  for (let value of home.tabs) {
    let tab = createElementWithClass('tab');
    tab.id = value;
    tab.textContent = value;

    parent.appendChild(tab);
  }
}

export { loadBase, main, content };
