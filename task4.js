const sectionEl = document.getElementById('container');
const liEl = document.getElementsByClassName('second');
const olEl = document.getElementsByTagName('ol');
const olLiEl = olEl[0].getElementsByClassName('third');
const ulEl = document.getElementsByTagName('ul');


//sectionEl.textContent += '¡Hola!';

const footerDivEl = document.querySelector('.footer');
footerDivEl.classList.add('main');

//footerDiv.classList.remove('main');

const addLiEl = document.createElement('li');
addLiEl.textContent = 'fourth';
ulEl[0].appendChild(addLiEl);

