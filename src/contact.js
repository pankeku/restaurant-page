import { contacts } from './config.js';
import { main } from './pageLoad';
import createElementWithClass from './util.js';

function loadContactPage() {
  main.append(generateContactPage());
  return main;
}

function generateContactPage() {
  const container = createElementWithClass('contact-container');

  const infoWrapper = createElementWithClass('info-wrapper');

  const addressContainer = createElementWithClass('address-container');

  const telephoneContainer = createElementWithClass('telephone-container');

  infoWrapper.appendChild(addressContainer);
  infoWrapper.appendChild(telephoneContainer);

  const telephoneTitle = createElementWithClass('telephone-title');
  telephoneTitle.classList.add('title--underline');
  const telephone = createElementWithClass('telephone');
  telephoneTitle.textContent = contacts.telephoneTitle;
  telephone.textContent = contacts.telephone;

  telephoneContainer.appendChild(telephoneTitle);
  telephoneContainer.appendChild(telephone);

  const addressTitle = createElementWithClass('address-title');
  addressTitle.classList.add('title--underline');
  const address = createElementWithClass('address');
  addressTitle.textContent = contacts.addressTitle;
  address.textContent = contacts.address;

  addressContainer.append(addressTitle);
  addressContainer.append(address);

  const map = createElementWithClass('contact-map');

  container.appendChild(infoWrapper);
  container.appendChild(map);

  initMap(map);

  return container;
}

window.initMap = function (mapElement) {
  const loc = { lat: 43.4377, lng: 5.0369 };
  const map = new google.maps.Map(mapElement, {
    zoom: 12,
    center: loc,
  });
  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
};

export default loadContactPage;
