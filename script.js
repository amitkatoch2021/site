/* Responsive navigation */
const navigationButton = document.querySelector('#navigation-button');
const navigationMenu = document.querySelector('#navigation-menu');

navigationButton.addEventListener('click', () => {
    navigationMenu.classList.toggle('hidden');
});