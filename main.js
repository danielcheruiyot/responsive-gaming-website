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
sr.reveal('.icons',{delay:900, origin:'left'});
sr.reveal('.scroll-down',{delay:900, origin:'right'});




/*hover animation */
function animateBtnFill(btnFill, translateY, duration) {
    requestAnimationFrame(() => {
        btnFill.animate(
            {
                transform: `translate(-50%, ${translateY}%)`,
            },

            {duration, fill:'forwards', easing: 'ease'}
        )
    })
}


const buttons = document.querySelectorAll('.ctaa');
buttons.forEach((btn) => {
    const btnFill = btn.querySelectorAll('.btn-fill')

    btn.addEventListener('mouseenter', () => {
        animateBtnFill(btnFill, 50, 0)

        animateBtnFill(btnFill, -50, 850)
    })

    btn.addEventListener('mouseleave', () => {
        animateBtnFill(btnFill, -150,850)
    })
})