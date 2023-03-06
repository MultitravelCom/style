// Resaltar solpa Fligh en la home.
document.addEventListener('DOMContentLoaded', () => {
    let secondNavItem = document.querySelector('#main-menu-products ul li:nth-child(2)');
    secondNavItem.classList.add('nav-elem');
    secondNavItem.classList.add('active');
    console.log('El código se ha ejecutado correctamente');
});
