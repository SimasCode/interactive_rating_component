'use strict';
console.log('index.js file was loaded');

const form = document.getElementById('form');
const resultValue = document.getElementById('rated-value');
const rateContainer = document.getElementById('rate-container');
const thanksContainer = document.getElementById('thanks-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const selectedValue = document.querySelector("input[name='rate']:checked");

  resultValue.textContent = selectedValue.value;

  rateContainer.classList.add('hide');
  thanksContainer.classList.remove('hide');
});
