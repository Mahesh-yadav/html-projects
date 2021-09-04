import {toggleDOMElement} from './dom-functions.mjs';

const secretBtn = document.getElementById('secret-btn');
const secretMsg = document.getElementById('secret-message');

secretBtn.addEventListener('click', () => {
  toggleDOMElement(secretMsg);
})