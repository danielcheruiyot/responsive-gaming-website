let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let icon = document.querySelector('#icon-icon');

menu.onclick = () => {
    navlist.classList.toggle('open');
}