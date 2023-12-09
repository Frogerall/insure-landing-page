const navBtn = document.querySelector('.nav-btn');
const navClose = document.querySelector('.nav-close');
const navMenu = document.querySelector('.nav-menu');

const toggleMenu = () => {
 navMenu.classList.toggle('hidden');
 navBtn.classList.toggle('hidden');
 navClose.classList.toggle('hidden');
};

navBtn.addEventListener('click', toggleMenu);
navClose.addEventListener('click', toggleMenu);
