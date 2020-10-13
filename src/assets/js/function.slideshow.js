import Siema from 'siema';

var slideshowSelector = document.querySelector('.slideshow');
var previousSlide = document.querySelector('.slide-prev');
var nextSlide = document.querySelector('.slide-next');
var slideshow = "";

if (slideshowSelector) {
    slideshow = new Siema({
        selector: '.slideshow',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
    });
}

if (previousSlide) {
    previousSlide.addEventListener('click', () => slideshow.prev());
}

if (nextSlide) {
    nextSlide.addEventListener('click', () => slideshow.next());
}

//https://codepen.io/collection/Adpkkd/?cursor=ZD0xJm89MCZwPTEmdj0xMDIyNDU0