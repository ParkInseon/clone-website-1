const mobileMenu = document.querySelector('.mobile-navigation');
const menuBtn = document.querySelector('#menuBtn');
const closeMenuBtn = document.querySelector('#closeMenuBtn');


// Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    if(mobileMenu.classList.contains('mobile-navigation--slideUp')) {
        mobileMenu.classList.replace('mobile-navigation--slideUp', 'mobile-navigation--slideDown');
    } else {
        mobileMenu.classList.add('mobile-navigation--slideDown');
    }
});

closeMenuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.remove('active');
    mobileMenu.classList.replace('mobile-navigation--slideDown', 'mobile-navigation--slideUp');
});

window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;

    if((screenWidth > 767) && (mobileMenu.classList.contains('active'))) {
        mobileMenu.classList.remove('active', 'mobile-navigation--slideDown');
    }
});