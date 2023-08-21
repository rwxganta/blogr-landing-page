const hamburguerBtn = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');

hamburguerBtn.addEventListener('click', () => {
    menu.setAttribute('data-open', 
    menu.getAttribute('data-open') === 'true' ? 'false' : 'true');
    hamburguerBtn.classList.toggle('open');
    //if (menu.getAttribute('data-open') === 'true') {
    //    menu.setAttribute('data-open', 'false');
    //} else {
    //    menu.setAttribute('data-open', 'true');
    //}
});