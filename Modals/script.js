'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelectorAll('.show-modal');

const open = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener('click', open);
}

closeBtn.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});
