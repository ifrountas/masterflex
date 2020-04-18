import Accordion from 'accordion-js';

var targetedClass    = '.accordion-container';
var accordionElement = document.querySelectorAll(targetedClass);

if (accordionElement.length > 0) {
    new Accordion(targetedClass);
}
