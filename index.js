
import { pic1Src, pic2Src, pic3Src } from './config.js';

const pic1 = new Image();
const pic2 = new Image();
const pic3 = new Image();

pic1.src = pic1Src;
pic2.src = pic2Src;
pic3.src = pic3Src;
const pictures = [pic1, pic2, pic3];
let currentPictureIndex = 1; // Start with the second picture (pic2)

const imgElement = document.getElementById('sliderImage');
imgElement.setAttribute('src', pictures[currentPictureIndex].src);


document.querySelector('.btn_1').addEventListener('click', () => {
    currentPictureIndex = (currentPictureIndex - 1 + pictures.length) % pictures.length;
    document.querySelector('img').src = pictures[currentPictureIndex].src;
});

document.querySelector('.btn_2').addEventListener('click', () => {
    currentPictureIndex = (currentPictureIndex + 1) % pictures.length;
    document.querySelector('img').src = pictures[currentPictureIndex].src;
});