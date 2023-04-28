let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let icon = document.querySelector('#icon-icon');

menu.onclick = () => {
    navlist.classList.toggle('open');
    menu.classList.toggle('ri-close-line');
    menu.classList.toggle('ri-menu-2-line');
    
}


const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true

});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:700, origin:'top'});

