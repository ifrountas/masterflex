const menuIcon = document.querySelector('.burger-menu');
const mobimenu = document.querySelector('.responsive-menu');
const sitebody = document.querySelector('body');

let mainmenu     = document.querySelector('.responsive-menu');
let className    = 'mobimenu';
let verticalMenu = 'vertical__nav';

const mediaQuery = window.matchMedia('(min-width: 1024px)');

function handleTabletChange(e) {
	// Check if the media query is true
	if (e.matches) {
  
		// If the mediaquery is larger than 1024px
		if (mainmenu.classList) {
			mainmenu.classList.remove(className);
			mainmenu.classList.remove(verticalMenu);
			mainmenu.classList.add('mainmenu');
			mainmenu.classList.add('horizontal__nav');
		}
  
	}else{
		
		// If the mediaquery is smaller than 1024px
		if (mainmenu.classList) {
			mainmenu.classList.remove('mainmenu');
			mainmenu.classList.remove('horizontal__nav');
			mainmenu.classList.add(className);
			mainmenu.classList.add(verticalMenu);
		}else{
			mainmenu.className += ' ' + className + ' ' + verticalMenu;
		}
	  
	}
  
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

menuIcon.addEventListener('click', ()=> {
	mobimenu.classList.toggle('change');
	menuIcon.classList.toggle('change');
	sitebody.classList.toggle('mobimenu-is-open');
});