import Siema from 'siema';

const mySiema = new Siema({
    selector: '.slideshow',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
});

document.querySelector('.slide-prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.slide-next').addEventListener('click', () => mySiema.next());

//https://codepen.io/collection/Adpkkd/?cursor=ZD0xJm89MCZwPTEmdj0xMDIyNDU0