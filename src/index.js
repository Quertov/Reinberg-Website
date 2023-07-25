const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu i');
const dropdownMenu = document.querySelector('.dropdown-menu');

menu.onclick = function() {
	dropdownMenu.classList.toggle('open');
	let isOpen = dropdownMenu.classList.contains('open');
	menuIcon.classList = isOpen ? 'bx bx-x' : 'bx bx-menu';
}


const sr = ScrollReveal({
	distance: '65px',
	duration: 2500,
	delay: 400,
	reset: true
});

sr.reveal('.home-sci', {delay: 1000, origin: 'bottom'})
sr.reveal('.header', {delay: 450, origin: 'top'});