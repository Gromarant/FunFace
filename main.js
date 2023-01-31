'use strict';
import { emojisData } from './emojis.js';

const faceSelector = document.querySelector('.select-Button');
const image = document.querySelector('.container__face');
const update = document.querySelector('.update');
const randomUpdate = document.querySelector('.random-face');

const emojis = [ 'Crazy', 'In Love', 'How Much', 'Rapper', 'Toothless', 'Hypnotized',  'Angry', 'Why', 'hahahaha', 'Beau', 'Weepy', 'Dumb' ]

const getRgbBgColor = () => {
  let red = Math.floor( Math.random() * 256);
  let green = Math.floor( Math.random() * 256);
  let blue = Math.floor( Math.random() * 256);
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  return rgbColor;
}

const SetrgbBgColor = () => document.body.style.background = getRgbBgColor();

const emojiBuilder = ({ src, alt, title }) => `<img class="face" src="${ src }" alt="${ alt }" title="${ title }">`;

const randomIndex = () => Math.floor( Math.random() * (emojis.length) );

const getRandomEmoji = () => emojis[randomIndex()];

const getEmoji = () => ( faceSelector.value === '' ) ? getRandomEmoji() : faceSelector.value;

const setEmoji = ( emoji ) => image.innerHTML = emojiBuilder( emojisData[emoji] );
SetrgbBgColor();
setEmoji( getRandomEmoji() );

randomUpdate.addEventListener( 'click', () => {
  SetrgbBgColor();
  setEmoji( getRandomEmoji() );
})

update.addEventListener( 'click', () => {
  SetrgbBgColor();
  setEmoji( getEmoji() );
});