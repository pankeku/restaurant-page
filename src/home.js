import { home } from './config.js';
import { main } from './pageLoad';
import createElementWithClass from './util.js';

let index = 0;

function loadHomePage() {

  main.append(generateReviews(), generateGreeting(), generateHours());

  return main;
}


function generateReviews() {
  const reviewsContainer = createElementWithClass('reviews-container');

  const title = createElementWithClass('review-title');
  title.classList.add('title--underline');
  title.textContent = home.reviewTitle;
  reviewsContainer.appendChild(title);

  const text = createElementWithClass('review-text');
  const reviewer = createElementWithClass('reviewer');

  text.classList.add('changing');
  reviewer.classList.add('changing');

  addReviewContent(text, reviewer);

  reviewsContainer.appendChild(text);
  reviewsContainer.appendChild(reviewer);

  return reviewsContainer;
}

function addReviewContent(text, reviewer) {

  changingReviews(text, reviewer);

  setInterval(changingReviews, 6000, text, reviewer);
}

function changingReviews(text, reviewer) {
  const reviews = Object.keys(home.reviews);
  let author;
  let review;

  text.classList.add('shown');
  reviewer.classList.add('shown');

  if (index === reviews.length) {
    index = 0;
  }
  if (index <= reviews.length) {
    author = reviews[index];
    review = home.reviews[author];

    reviewer.textContent = `- ${author}`;
    text.textContent = review;

    index++;
  }

  return setTimeout(() => {
    text.classList.remove('shown');
    reviewer.classList.remove('shown');
  }, 5000);
}

function generateGreeting() {
  const container = createElementWithClass('greeting-container');

  const title = createElementWithClass('greeting-title');
  title.textContent = home.greetingTitle;
  container.appendChild(title);

  const greeting = createElementWithClass('greeting-text');
  container.appendChild(greeting);
  greeting.textContent = home.greeting;

  return container;
}

function generateHours() {
  const container = createElementWithClass('hours-container');

  const title = createElementWithClass('hours-title');
  title.classList.add('title--underline');
  title.textContent = home.hoursTitle;
  container.appendChild(title);

  const hours = document.createElement('div');
  hours.classList.add('hours');

  for (const hour of Object.keys(home.hours)) {
    const element = document.createElement('div');
    hours.appendChild(element);
    element.textContent = `${hour} ${home.hours[hour]}\n`;
  }

  container.appendChild(hours);
  return container;
}

export default loadHomePage;