window.onload = function(){
    const nav = document.querySelector('nav');
    const box = document.querySelector('.box');

    box.onclick = function(){
        nav.classList.toggle('close');
        box.classList.toggle('close');
    }
}