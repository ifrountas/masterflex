import enquire from 'enquire-js';

if (!Object.entries) {
    Object.entries = function( obj ){
        var ownProps = Object.keys( obj ),
            i = ownProps.length,
            resArray = new Array(i);
        while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];
      
        return resArray;
    };
}

let html = document.querySelector('html');

const mediaQueries = {
    sm: 'screen and (min-width: 0px)',
    mob: 'screen and (min-width: 321px)',
    tab: 'screen and (min-width: 600px)',
    lap: 'screen and (min-width: 1024px)',
    des: 'screen and (min-width: 1280px)',
    lg: 'screen and (min-width: 1440px)',
    xl: 'screen and (min-width: 1680px)',
    landscape: 'screen and (orientation: landscape)',
    potrait: 'screen and (orientation: portrait)'
};

Object.entries(mediaQueries).forEach(([breakpoint, mediaquery]) => 
    enquire.register( mediaquery, { 
        match : function() { html.classList.add( breakpoint ); },
        unmatch : function() { html.classList.remove( breakpoint ); }
    })
);

