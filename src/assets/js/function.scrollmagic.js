import ScrollMagic from 'scrollmagic';

// ScrollMagic Documentation
// https://github.com/janpaepke/ScrollMagic/wiki/Getting-Started-:-How-to-use-ScrollMagic

// init controller
var controller = new ScrollMagic.Controller();
 
// create a scene
new ScrollMagic.Scene({
    duration: 100, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#post-1') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller