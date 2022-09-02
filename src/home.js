import './style.css';
import {home} from './config.js';
import {base, element, main } from './pageLoad';

export default function load() {

  generateReview();
  generateGreeting();
  generateHours();

  function generateReview() {
    const container = createElementAndClass('reviews-container');
    main.appendChild(container);

    const title = createElementAndClass('review-title');
    title.classList.add('title--underline');
    title.textContent = home.reviewTitle;
    container.appendChild(title);

    const text = createElementAndClass('review-text');
    const reviewer = createElementAndClass('reviewer');

    text.classList.add('changing');
    reviewer.classList.add('changing');

    changingReviews();

    function changingReviews() {
      let reviews = Object.keys(home.reviews);
      let author;
      let review;

      let index = 0;

      fadingReviews();
      setInterval(fadingReviews, 6000);

      function fadingReviews() {
        text.classList.add('shown');
        reviewer.classList.add('shown');

        if (index === reviews.length) {
          index = 0;
        }
        if (index <= reviews.length) {
          author = reviews[index];
          review = home.reviews[author];

          reviewer.textContent = '- ' + author;
          text.textContent = review;

          index++;
        }

        return setTimeout(() => {
          text.classList.remove('shown');
          reviewer.classList.remove('shown');
        }, 5000);
      }
    }

    container.appendChild(text);
    container.appendChild(reviewer);
  }

  function generateGreeting() {
    const container = createElementAndClass('greeting-container');

    const title = createElementAndClass('greeting-title');
    title.textContent = home.greetingTitle;
    container.appendChild(title);

    const greeting = createElementAndClass('greeting-text');
    container.appendChild(greeting);
    greeting.textContent = home.greeting;

    main.appendChild(container);
  }

  function generateHours() {
    const container = createElementAndClass('hours-container');

    const title = createElementAndClass('hours-title');
    title.classList.add('title--underline');
    title.textContent = home.hoursTitle;
    container.appendChild(title);

    main.appendChild(container);

    const hours = document.createElement('div');
    hours.classList.add('hours');

    for (let value of Object.keys(home.hours)) {
      const element = document.createElement('div');
      hours.appendChild(element);
      element.textContent = value + ' ' + home.hours[value] + '\n';
    }

    container.appendChild(hours);
  }

  return element;
}

function createElementAndClass(className) {
  let foo = document.createElement('div');
  foo.classList.add(className);

  return foo;
}
