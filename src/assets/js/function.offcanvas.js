const menuIcon = document.querySelector('.burger-menu');
const mobimenu = document.querySelector('.mobimenu');
const mainbody = document.querySelector('.site-main');
const sitebody = document.querySelector('body');

menuIcon.addEventListener('click', ()=> {
	mobimenu.classList.toggle('change');
	menuIcon.classList.toggle('change');
	mainbody.classList.toggle('mobimenu-is-open');
	sitebody.classList.toggle('mobimenu-is-open');
});