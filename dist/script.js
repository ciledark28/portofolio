// Bagian Hamburger 

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click' , function () {
hamburger.classList.toggle('hamburger-active');
navMenu.classList.toggle('hidden');

});

// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
header.classList.add('navbar-fixed');
toTop.classList.remove('hidden');
toTop.classList.add('flex');
} else {
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
        header.classList.remove('navbar-fixed');
    }
};

// klik di luar hamburger
window.addEventListener('click', function(e) {
if(e.target != hamburger && navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
}
});

// Dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
 const html = document.querySelector('html');

 darkToggle.addEventListener('click', function(){
if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark'
} else {
html.classList.remove('dark');
localStorage.theme = 'light'
 }
 });

// pindahkan togle ke posisi mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }