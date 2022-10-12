'use strict';

const undate = document.querySelector('.undate');
const faceImg = document.querySelector('.face');
const face = document.querySelector('#face-select');
const background = document.querySelector('.contain');
const selectButton = document.querySelector('.selectButton');

undate.addEventListener( 'click', () => {
  if( face.value === 'crazy' ) {
    undate.classList.remove('orange');
    selectButton.classList.remove('pink');
    background.classList.remove('lovely');
    faceImg.classList.remove('faceLove');

    undate.classList.add('pink');
    selectButton.classList.add('orange');
    background.classList.add('deranged');
    faceImg.classList.add('derangedFace');
  } 
  if( face.value === 'Love' ) {
    undate.classList.remove('pink');
    selectButton.classList.remove('orange');
    background.classList.remove('deranged');
    faceImg.classList.remove('derangedFace');

    undate.classList.add('orange');
    selectButton.classList.add('pink');
    background.classList.add('lovely');
    faceImg.classList.add('faceLove');
  }
})