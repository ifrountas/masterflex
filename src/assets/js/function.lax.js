import lax from 'lax.js';

// Lax documentation
// https://github.com/alexfoxy/lax.js?utm_source=xinquji

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}