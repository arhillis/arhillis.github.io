const themeBtn = document.querySelector('.theme-btn');
const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelector('.controlls');
const sectionBtn = document.querySelectorAll('.control');
const body = document.querySelector('body');

const pageTransition = (i) =>{
        i.addEventListener('click', function(e){
            const {id} = e.target.dataset;
            const activeSection = document.getElementById(id);
            
            sectionBtn.forEach(btn =>  btn.classList.remove('active'));
            this.classList.add('active');

            sections.forEach(section => section.classList.remove('active'));
            activeSection.classList.add('active');
        });
};

const toggleTheme = () =>{
    body.classList.toggle('light-mode')
}

const addEventListeners = () =>{    
    themeBtn.addEventListener('click', toggleTheme);
    for(let i of sectionBtn){
        pageTransition(i);
    }
}

window.onload = addEventListeners;