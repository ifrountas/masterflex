const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navigation ul');

	burger.addEventListener('click', ()=>{
		nav.classList.toggle('navigation__is-active');
	})
}

//navSlide();