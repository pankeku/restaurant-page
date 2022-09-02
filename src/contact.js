import './style.css';
import {contacts} from './config.js';
import { base, element, main } from './pageLoad';
import createElementAndClass from './util.js';

function contact() {
  let container = createElementAndClass('contact-container');

  let infoWrapper = createElementAndClass('info-wrapper');
  
  let addressContainer = createElementAndClass('address-container');

  let telephoneContainer = createElementAndClass('telephone-container');

  infoWrapper.appendChild(addressContainer);
  infoWrapper.appendChild(telephoneContainer);

  const telephoneTitle = createElementAndClass('telephone-title');
  telephoneTitle.classList.add('title--underline');
  const telephone = createElementAndClass('telephone');
  telephoneTitle.textContent = contacts.telephoneTitle;
  telephone.textContent = contacts.telephone;

  telephoneContainer.appendChild(telephoneTitle);
  telephoneContainer.appendChild(telephone);

  const addressTitle = createElementAndClass('address-title');
  addressTitle.classList.add('title--underline');
  const address = createElementAndClass('address');
  addressTitle.textContent = contacts.addressTitle;
  address.textContent = contacts.address;

  

  addressContainer.append(addressTitle);
  addressContainer.append(address);

  let map = createElementAndClass('contact-map');
  
  container.appendChild(infoWrapper);
  container.appendChild(map);

  main.appendChild(container);

  initMap();

  return element;
}

window.initMap = function () {
  const loc = { lat: 43.4377, lng: 5.0369 };
  const map = new google.maps.Map(document.querySelector('.contact-map'), {
    zoom: 12,
    center: loc,
  });
  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
};

export default contact;
