window.onload = function(){
    const hamburgerBtn = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburgerBtn.addEventListener('click', () => navList.classList.toggle('show'));
}