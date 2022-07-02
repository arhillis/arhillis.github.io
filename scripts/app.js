const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelector('.controlls');
const sectionBtn = document.querySelectorAll('.control');
const body = document.querySelector('body');

const pageTransition = () =>{
    for(let i of sectionBtn){
        i.addEventListener('click', () =>{
            for(let btn of sectionBtn){
                btn.classList.remove('active');
            }
            i.classList.add('active');
        });
    }
};

window.onload = pageTransition;