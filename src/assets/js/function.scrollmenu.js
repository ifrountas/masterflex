(function(){

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    var header = document.querySelector('.main__header');
    var menuPadding = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--menu-padding')) + "0";
    var headerHeight = header.clientHeight - (menuPadding * 2);
    header.style.setProperty('--main-header-height', headerHeight +"px");


    document.body.style.paddingTop = Number(headerHeight) + Number(menuPadding) +"px";
  
    var checkScroll = function() {
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
  
      prevScroll = curScroll;
      
    };
  
    var toggleHeader = function(direction, curScroll) {
      if ( direction === 2 && curScroll > headerHeight ) { 
  
        //replace 52 with the height of your header in px
  
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }

    };
  
    window.addEventListener('scroll', checkScroll);
  
  })();